"""Application configuration helpers."""

from functools import lru_cache
from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Centralized application settings loaded from environment variables."""

    environment: str = Field(default='development', alias='APP_ENV')
    database_url: str = Field(
        default='postgresql://postgres:postgres@localhost:5432/attending_physician',
        alias='DATABASE_URL',
    )
    allowed_origins: list[str] = Field(
        default_factory=lambda: ['http://localhost:5173'],
        alias='ALLOWED_ORIGINS',
    )
    api_prefix: str = Field(default='/api', alias='API_PREFIX')

    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    @field_validator('allowed_origins', mode='before')
    @classmethod
    def split_origins(cls, value: str | list[str] | None) -> list[str]:
        if value is None:
            return []
        if isinstance(value, str):
            return [item.strip() for item in value.split(',') if item.strip()]
        return value


def get_settings() -> Settings:
    """Return a cached Settings instance."""

    @lru_cache
    def _get_settings() -> Settings:
        return Settings()

    return _get_settings()
