#!/usr/bin/env python
"""
One-off ETL helper that copies embeddings from the local SQLite cache into
the managed Render Postgres instance (which uses pgvector for storage).
"""

from __future__ import annotations

import argparse
import os
import pickle
import sqlite3
from pathlib import Path
from typing import Iterable, List, Sequence, Tuple

import numpy as np
import psycopg2
from psycopg2.extras import execute_values


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Upload medical embeddings to Postgres.")
    parser.add_argument(
        "--sqlite-path",
        default=str(Path("~/Downloads/pubmedqa_embeddings.db").expanduser()),
        help="Path to the local SQLite database produced by embed_to_sqlite.ipynb",
    )
    parser.add_argument(
        "--postgres-url",
        default=os.environ.get("DATABASE_URL"),
        help="Render Postgres connection string (falls back to DATABASE_URL env var).",
    )
    parser.add_argument(
        "--sslrootcert",
        default=str(Path("isrgrootx1-selfsigned.pem").resolve()),
        help="Path to the trusted CA certificate Render requires for SSL verification.",
    )
    parser.add_argument(
        "--batch-size",
        type=int,
        default=200,
        help="Number of rows to insert per transaction.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Optional limit for testing smaller imports.",
    )
    parser.add_argument(
        "--offset",
        type=int,
        default=0,
        help="Number of SQLite rows to skip (useful for resuming long imports).",
    )
    return parser.parse_args()


def deserialize_embedding(blob: bytes) -> List[float]:
    arr = pickle.loads(blob)
    if isinstance(arr, np.ndarray):
        return arr.astype(np.float32).tolist()
    return [float(x) for x in arr]


def format_vector(values: Sequence[float]) -> str:
    # pgvector accepts the textual representation "[v1,v2,...]"
    return "[" + ",".join(f"{float(v):.8f}" for v in values) + "]"


def fetch_sqlite_rows(sqlite_path: str, limit: int | None = None, offset: int = 0) -> Iterable[Tuple]:
    conn = sqlite3.connect(sqlite_path)
    cursor = conn.cursor()
    query = """
        SELECT pmid, question, context, long_answer, final_decision, embedding
        FROM pubmedqa_embeddings
        ORDER BY id
    """

    params: List[int] = []
    if limit is not None:
        query += " LIMIT ?"
        params.append(int(limit))

    if offset:
        if limit is None:
            query += " LIMIT -1"
        query += " OFFSET ?"
        params.append(int(offset))

    cursor.execute(query, params)
    while True:
        rows = cursor.fetchmany(500)
        if not rows:
            break
        for row in rows:
            yield row
    cursor.close()
    conn.close()


def main() -> None:
    args = parse_args()

    if not args.postgres_url:
        raise SystemExit("Postgres URL not provided. Use --postgres-url or set DATABASE_URL.")

    sqlite_path = Path(args.sqlite_path).expanduser()
    if not sqlite_path.exists():
        raise SystemExit(f"SQLite database not found: {sqlite_path}")

    sslroot = Path(args.sslrootcert).expanduser()
    if not sslroot.exists():
        raise SystemExit(f"SSL root certificate not found: {sslroot}")

    pg_conn = psycopg2.connect(
        args.postgres_url,
        sslmode="verify-full",
        sslrootcert=str(sslroot),
    )
    pg_conn.autocommit = False
    pg_cur = pg_conn.cursor()

    pg_cur.execute("CREATE EXTENSION IF NOT EXISTS vector;")
    pg_cur.execute(
        """
        CREATE TABLE IF NOT EXISTS medical_embeddings (
            id BIGSERIAL PRIMARY KEY,
            pmid TEXT NOT NULL,
            question TEXT NOT NULL,
            context TEXT,
            long_answer TEXT,
            final_decision TEXT,
            embedding vector(768) NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
        """
    )
    pg_cur.execute(
        "CREATE UNIQUE INDEX IF NOT EXISTS idx_medical_embeddings_pmid ON medical_embeddings(pmid)"
    )
    pg_conn.commit()

    insert_sql = """
        INSERT INTO medical_embeddings
            (pmid, question, context, long_answer, final_decision, embedding)
        VALUES %s
        ON CONFLICT (pmid) DO UPDATE SET
            question = EXCLUDED.question,
            context = EXCLUDED.context,
            long_answer = EXCLUDED.long_answer,
            final_decision = EXCLUDED.final_decision,
            embedding = EXCLUDED.embedding,
            updated_at = NOW()
    """

    total_inserted = 0
    batch: List[Tuple[str, str, str, str, str, str]] = []

    print(f"Reading from {sqlite_path} (offset={args.offset or 0}) ...")
    for idx, row in enumerate(
        fetch_sqlite_rows(str(sqlite_path), limit=args.limit, offset=args.offset),
        start=1 + args.offset,
    ):
        pmid, question, context, long_answer, final_decision, embedding_blob = row
        embedding_list = deserialize_embedding(embedding_blob)
        embedding_literal = format_vector(embedding_list)
        batch.append(
            (
                pmid,
                question or "",
                context or "",
                long_answer or "",
                final_decision or "",
                embedding_literal,
            )
        )

        if len(batch) >= args.batch_size:
            execute_values(pg_cur, insert_sql, batch, template="(%s,%s,%s,%s,%s,%s::vector)")
            pg_conn.commit()
            total_inserted += len(batch)
            print(f"Inserted {total_inserted} rows...", end="\r", flush=True)
            batch.clear()

    if batch:
        execute_values(pg_cur, insert_sql, batch, template="(%s,%s,%s,%s,%s,%s::vector)")
        pg_conn.commit()
        total_inserted += len(batch)

    pg_cur.close()
    pg_conn.close()
    print(f"\nDone! Upserted {total_inserted} embeddings into medical_embeddings.")


if __name__ == "__main__":
    main()
