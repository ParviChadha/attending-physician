"""FastAPI entrypoint for the Attending Physician chatbot backend."""

from typing import Sequence

from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from . import models, schemas
from .config import get_settings
from .database import Base, engine, get_session

settings = get_settings()

app = FastAPI(
    title='Attending Physician API',
    version='0.1.0',
    description='Captures chatbot leads and routes them to your team.',
)

allowed_origins = settings.allowed_origins or ['*']
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.on_event('startup')
def _create_tables() -> None:
    Base.metadata.create_all(bind=engine)


@app.get(f"{settings.api_prefix}/health", tags=['health'])
def health_check() -> dict[str, str]:
    return {'status': 'ok'}


@app.post(
    f"{settings.api_prefix}/leads",
    response_model=schemas.LeadResponse,
    status_code=201,
    tags=['leads'],
)
def create_lead(payload: schemas.LeadCreate, db: Session = Depends(get_session)) -> schemas.LeadResponse:
    lead = models.Lead(**payload.model_dump())

    try:
        db.add(lead)
        db.commit()
        db.refresh(lead)
    except SQLAlchemyError as exc:  # pragma: no cover - defensive guard
        db.rollback()
        raise HTTPException(status_code=500, detail='Failed to store lead') from exc

    return lead


@app.get(
    f"{settings.api_prefix}/leads",
    response_model=list[schemas.LeadResponse],
    tags=['leads'],
)
def list_leads(
    limit: int = Query(default=25, ge=1, le=100),
    db: Session = Depends(get_session),
) -> Sequence[schemas.LeadResponse]:
    records = (
        db.query(models.Lead)
        .order_by(models.Lead.created_at.desc())
        .limit(limit)
        .all()
    )
    return records
