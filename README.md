# Attending Physician

## Project overview

Attending Physician is an AI-powered clinical reasoning coach designed to simulate an expert attending physician for triage training. It evaluates case presentations across nine expert clinical competencies and generates targeted Socratic questions to help learners uncover gaps in diagnostic reasoning and prioritization. Feedback is enriched through a retrieval-augmented system built from 200,000 PubMedQA entries.

## Installation / setup instructions

### Frontend

```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_BASE_URL
npm run dev
```

Deploy to GitHub Pages using:

```bash
npm run deploy
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env   # set DATABASE_URL and ALLOWED_ORIGINS
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

For local testing, set `DATABASE_URL=sqlite:///./dev.db`. Swagger documentation is available at `/docs`.

## Usage guide

1. Start both the frontend and backend.
2. Open the frontend in a browser.
3. Submit a triage case presentation.
4. The backend evaluates it, retrieves context through RAG if enabled, and returns feedback.
5. Iterate until competency goals are reached.

## Tech stack

* **Frontend:** React, Vite, GitHub Pages
* **Backend:** FastAPI, SQLAlchemy, PostgreSQL
* **ML:** PubMedBERT embeddings, vector retrieval
* **Infrastructure:** Render or Railway
* **RAG:** PubMedQA embeddings + top-K retrieval

## Claude API integration

Claude powers the four-agent architecture responsible for:

* Evaluating triage presentations
* Generating Socratic questions
* Assessing learner responses
* Managing adaptive conversation flow

Claude uses retrieved PubMedQA context for evidence-grounded reasoning.

## Challenges & solutions

**Challenge:** Multi-agent orchestration without exceeding token limits
**Solution:** Built four specialized agents with controlled context routing.

**Challenge:** Embedding 200,000 PubMedQA samples
**Solution:** Used batch processing, resumable scripts, and error handling.

**Challenge:** Coordinating deployments across GitHub Pages, Render/Railway, and managed Postgres
**Solution:** Standardized environment variables, configured CORS, and aligned hosting regions.

## Future plans

* Expand RAG corpus with specialty-specific literature
* Add streaming responses and rate limiting
* Build analytics dashboards for educators
* Pursue accreditation with nursing schools and hospitals
* Implement scalable vector search and caching

## Team members & contributions

**Yann** – Full-stack engineering, backend architecture, deployment
**Parvi** - multi-agent system, frontend
**Abigail** - multi-agent system, frontend
**Caleb** - RAG pipeline
