"""Application configuration helpers."""

from __future__ import annotations

from functools import lru_cache
from typing import List, Optional, Union

from pydantic import Field, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict

DEFAULT_ALLOWED_ORIGINS = ['http://localhost:5173']


class Settings(BaseSettings):
    """Centralized application settings loaded from environment variables."""

    environment: str = Field(default='development', alias='APP_ENV')
    database_url: str = Field(
        default='postgresql://postgres:postgres@localhost:5432/attending_physician',
        alias='DATABASE_URL',
    )
    allowed_origins_raw: Union[List[str], str, None] = Field(default=None, alias='ALLOWED_ORIGINS')
    api_prefix: str = Field(default='/api', alias='API_PREFIX')
    anthropic_api_key: Optional[str] = Field(default=None, alias='ANTHROPIC_API_KEY')

    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    @computed_field(return_type=list[str])
    @property
    def allowed_origins(self) -> list[str]:
        """Return a normalized list of allowed origins."""

        value = self.allowed_origins_raw
        if value is None:
            return DEFAULT_ALLOWED_ORIGINS.copy()
        if isinstance(value, str):
            return [item.strip() for item in value.split(',') if item.strip()]
        return value


def get_settings() -> Settings:
    """Return a cached Settings instance."""

    @lru_cache
    def _get_settings() -> Settings:
        return Settings()

    return _get_settings()
