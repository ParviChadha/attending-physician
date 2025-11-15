"""Concrete RAG implementation that queries the Postgres embeddings table."""

from __future__ import annotations

import logging
from typing import Dict, List, Sequence

from sqlalchemy import text
from sqlalchemy.engine import Engine
from sentence_transformers import SentenceTransformer

logger = logging.getLogger(__name__)


class PostgresMedicalRAG:
    """Simple RAG helper that encodes questions and searches the medical_embeddings table."""

    def __init__(
        self,
        engine: Engine,
        top_k: int = 3,
        model_name: str = "NeuML/pubmedbert-base-embeddings",
    ) -> None:
        self.engine = engine
        self.top_k = max(1, top_k)
        self.model_name = model_name
        self.encoder = SentenceTransformer(model_name)
        self._query_stmt = text(
            """
            SELECT pmid, question, context, long_answer, final_decision
            FROM medical_embeddings
            ORDER BY embedding <#> (:embedding)::vector
            LIMIT :limit
            """
        )

    @staticmethod
    def _format_vector(values: Sequence[float]) -> str:
        return "[" + ",".join(f"{float(v):.8f}" for v in values) + "]"

    def query(self, questions: List[str]) -> Dict[str, str]:
        if not questions:
            return {}

        try:
            embeddings = self.encoder.encode(questions, convert_to_numpy=True)
        except Exception as exc:  # pragma: no cover - best effort guard
            logger.warning("Failed to encode questions for RAG: %s", exc)
            return {question: "" for question in questions}

        results: Dict[str, str] = {}
        with self.engine.connect() as conn:
            for question, embedding in zip(questions, embeddings):
                vector_literal = self._format_vector(embedding)
                try:
                    rows = conn.execute(
                        self._query_stmt,
                        {
                            "embedding": vector_literal,
                            "limit": self.top_k,
                        },
                    ).fetchall()
                except Exception as exc:  # pragma: no cover - guard rails
                    logger.debug("RAG query failed for '%s': %s", question, exc)
                    results[question] = ""
                    continue

                snippets = []
                for row in rows:
                    answer_text = row.long_answer or row.context or ""
                    snippet = "\n".join(
                        filter(
                            None,
                            [
                                f"PMID: {row.pmid}",
                                f"Reference Question: {row.question}",
                                f"Final Decision: {row.final_decision or 'N/A'}",
                                f"Answer: {answer_text}",
                            ],
                        )
                    )
                    snippets.append(snippet)

                results[question] = "\n---\n".join(snippets)

        return results

    def get_formatted_context(self, rag_results: Dict[str, str]) -> str:
        if not rag_results:
            return ""

        formatted_parts = []
        for question, context in rag_results.items():
            if not context:
                continue
            formatted_parts.append(f"Q: {question}\nMedical Knowledge:\n{context}")

        return "\n\n".join(formatted_parts)
