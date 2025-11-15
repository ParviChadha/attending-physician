"""Database models."""

from sqlalchemy import Column, DateTime, Integer, String, Text, func

from .database import Base


class Lead(Base):
    __tablename__ = 'leads'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), nullable=False)
    organization = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
