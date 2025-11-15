"""Database models."""

from uuid import uuid4

from sqlalchemy import JSON, Column, DateTime, Integer, String, Text, func

from .database import Base


class Lead(Base):
    __tablename__ = 'leads'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), nullable=False)
    organization = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())


class ChatSession(Base):
    __tablename__ = 'chat_sessions'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid4()))
    presentation = Column(Text, nullable=False)
    state = Column(JSON, nullable=False)
    status = Column(String(32), nullable=False, default='active')
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())
