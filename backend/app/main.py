"""FastAPI entrypoint for the Attending Physician chatbot backend."""

from __future__ import annotations

from typing import Any, Sequence

from fastapi import Depends, FastAPI, HTTPException, Path, Query, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from . import models, schemas
from .config import get_settings
from .database import Base, engine, get_session
from .physician import AttendingPhysicianAPI

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


def _build_workflow_api(state: dict[str, Any] | None = None) -> AttendingPhysicianAPI:
    """Instantiate the Anthropic workflow wrapper and optionally load state."""

    if not settings.anthropic_api_key:
        raise HTTPException(status_code=500, detail='ANTHROPIC_API_KEY is not configured.')

    api = AttendingPhysicianAPI(api_key=settings.anthropic_api_key)
    if state:
        api.load_state(state)
    return api


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


@app.post(
    f"{settings.api_prefix}/chat/sessions",
    response_model=schemas.ChatSessionResponse,
    status_code=201,
    tags=['chat'],
)
def start_chat_session(
    payload: schemas.ChatSessionCreate,
    db: Session = Depends(get_session),
) -> schemas.ChatSessionResponse:
    api = _build_workflow_api()
    result = api.start_session(payload.presentation)
    if not result.get('success'):
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=result.get('error', 'Failed to start AI session.'),
        )

    session = models.ChatSession(
        presentation=payload.presentation,
        state=api.export_state(),
        status='active',
    )
    try:
        db.add(session)
        db.commit()
        db.refresh(session)
    except SQLAlchemyError as exc:
        db.rollback()
        raise HTTPException(status_code=500, detail='Failed to persist session.') from exc

    return schemas.ChatSessionResponse(
        session_id=session.id,
        status=session.status,
        response=result,
        created_at=session.created_at,
        updated_at=session.updated_at,
    )


@app.post(
    f"{settings.api_prefix}/chat/sessions/{{session_id}}/messages",
    response_model=schemas.ChatSessionResponse,
    tags=['chat'],
)
def answer_chat_question(
    payload: schemas.ChatMessage,
    session_id: str = Path(..., description='Chat session identifier.'),
    db: Session = Depends(get_session),
) -> schemas.ChatSessionResponse:
    session = db.query(models.ChatSession).filter(models.ChatSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail='Session not found.')

    api = _build_workflow_api(session.state)
    result = api.process_response(payload.answer)
    if not result.get('success'):
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=result.get('error', 'Failed to process response.'),
        )

    session.state = api.export_state()
    if isinstance(result.get('data'), dict) and result['data'].get('type') == 'session_complete':
        session.status = 'completed' if result['data'].get('status') == 'success' else 'timeout'

    try:
        db.add(session)
        db.commit()
        db.refresh(session)
    except SQLAlchemyError as exc:
        db.rollback()
        raise HTTPException(status_code=500, detail='Failed to update session.') from exc

    return schemas.ChatSessionResponse(
        session_id=session.id,
        status=session.status,
        response=result,
        created_at=session.created_at,
        updated_at=session.updated_at,
    )


@app.get(
    f"{settings.api_prefix}/chat/sessions/{{session_id}}",
    response_model=schemas.ChatSessionDetail,
    tags=['chat'],
)
def get_chat_session(
    session_id: str = Path(..., description='Chat session identifier.'),
    db: Session = Depends(get_session),
) -> schemas.ChatSessionDetail:
    session = db.query(models.ChatSession).filter(models.ChatSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail='Session not found.')

    return schemas.ChatSessionDetail(
        session_id=session.id,
        status=session.status,
        state=session.state,
        created_at=session.created_at,
        updated_at=session.updated_at,
    )
