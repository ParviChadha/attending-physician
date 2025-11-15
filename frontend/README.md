# Chatbot Landing Page (React)

This directory contains the static site that will be deployed to GitHub Pages. It was bootstrapped with Vite so you can preview, test, and deploy in seconds.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (ships with Node) or pnpm/yarn if you prefer—update the scripts accordingly

## Environment variables

Copy the sample file and update it with your backend URL:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | Public HTTPS URL of the FastAPI backend (no trailing slash). The contact form posts to `${VITE_API_BASE_URL}/api/leads`. |

If the variable is missing, the UI still renders but the form shows a warning instead of attempting a submission.

## Local development

```bash
npm install
npm run dev
```

This runs the Vite dev server on [http://localhost:5173](http://localhost:5173) with hot module reloading.

## Production build

```bash
npm run build
npm run preview
```

The optimized assets are emitted into `dist/`. `npm run preview` serves that folder locally so you can sanity-check the production bundle.

## Deploying to GitHub Pages

1. Push the repository to GitHub and enable Pages for the `gh-pages` branch.
2. Run `npm run deploy` from this folder. The script runs a build and publishes `dist/` to the `gh-pages` branch using the [`gh-pages`](https://github.com/tschaub/gh-pages) CLI.
3. (Optional) Automate deployments with a GitHub Actions workflow that runs the same script on every push to `main`.

The Vite config sets `base: './'`, so the site works whether it is served from the root domain or `/repo-name`.
