# Attending Physician Landing Page

A minimal two-tier stack for promoting and collecting leads for your chatbot:

- `frontend/` – React + Vite landing page deployable to GitHub Pages.
- `backend/` – FastAPI service with PostgreSQL persistence for form submissions.

You can host the static frontend on Pages and deploy the backend/database to a managed PaaS such as Render or Railway for the simplest setup.

## Getting started

### Frontend

```bash
cd frontend
npm install
cp .env.example .env  # update VITE_API_BASE_URL after the backend is live
npm run dev
```

Run `npm run deploy` to publish the production build to GitHub Pages (it pushes `dist/` to the `gh-pages` branch using the `gh-pages` CLI).

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env  # provide DATABASE_URL + ALLOWED_ORIGINS
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Create the PostgreSQL database referenced in `DATABASE_URL` first. During startup the API creates the `leads` table automatically and exposes Swagger docs at `/docs`.

## Deploying the stack

1. **Backend + DB** – Use a PaaS with HTTPS and managed Postgres (Render, Railway, Fly.io, Heroku). Supply `DATABASE_URL`, `ALLOWED_ORIGINS`, and `API_PREFIX` env vars. Render can host both the API and DB so you avoid custom DevOps.
2. **Frontend** – In GitHub, enable Pages for the repository. Run `npm run deploy` (locally or via a GitHub Actions workflow) whenever you want to publish updates. The Vite config already uses relative asset paths so it works under `/repo-name`.
3. **Connect both** – Set `VITE_API_BASE_URL` in `frontend/.env` to the backend’s public HTTPS URL. The contact form will now POST to `/api/leads`.

## Repository layout

```
frontend/   React marketing site for the chatbot
backend/    FastAPI + SQLAlchemy service for persistence
```

## Next steps

- Customize the hero copy and CTAs, or swap the theme tokens in `src/App.css`.
- Extend the backend with auth, rate limiting, or chat completion routes.
- Add CI/CD: e.g., GitHub Actions workflow that runs frontend lint/tests and deploys both services.
