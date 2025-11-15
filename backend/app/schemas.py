"""Pydantic schemas for request and response models."""

from datetime import datetime
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
