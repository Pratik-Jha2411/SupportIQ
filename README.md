# SupportIQ

SupportIQ is an AI customer-support operations dashboard for triage, workflow visibility, searchable conversations, and explainable recommendations.

## Run locally

1. Copy `.env.sample` to `.env.local`.
2. Install dependencies with `npm install`.
3. Start development with `npm run dev`, then open `http://localhost:3000`.

The demo uses seeded in-memory data behind a SQLite-compatible repository boundary. Replace `src/lib/repository.ts` with a SQLite adapter when persistence is needed. The AI provider interface in `src/lib/ai.ts` is ready for an Azure OpenAI implementation without coupling the UI to a provider.

Routes: `/` dashboard, `/tickets` queue, `/conversations` history, `/performance` metrics, `/recruiter` public portfolio view.
