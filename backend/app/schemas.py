"""Pydantic schemas for request and response models."""

from datetime import datetime
from typing import Any, Dict

from pydantic import BaseModel, EmailStr, Field


class LeadBase(BaseModel):
    email: EmailStr
    organization: str = Field(min_length=2, max_length=255)
    message: str = Field(min_length=4)


class LeadCreate(LeadBase):
    pass


class LeadResponse(LeadBase):
    id: int
    created_at: datetime

    model_config = {
        'from_attributes': True,
    }


class ChatSessionCreate(BaseModel):
    presentation: str = Field(min_length=40, description='Full student presentation to evaluate.')


class ChatMessage(BaseModel):
    answer: str = Field(min_length=5, description='Student response to the most recent question(s).')


class ChatSessionResponse(BaseModel):
    session_id: str
    status: str
    response: Dict[str, Any]
    created_at: datetime
    updated_at: datetime


class ChatSessionDetail(BaseModel):
    session_id: str
    status: str
    state: Dict[str, Any]
    created_at: datetime
    updated_at: datetime
