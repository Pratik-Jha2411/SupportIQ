# SupportIQ

SupportIQ is an AI-assisted customer support operations dashboard built with Next.js. It gives support teams a focused view of ticket volume, response performance, customer sentiment, AI recommendations, and team activity.

> **Portfolio/demo project:** SupportIQ currently runs on seeded in-memory data. The repository and provider boundaries are intentionally structured so a persistent database and production AI service can be added without changing the dashboard contract.

## What it includes

- **Operations overview** with open-ticket volume, first-response time, CSAT, AI-assisted resolution rate, team pulse, and recent tickets.
- **Ticket queue** with searchable support tickets and status, priority, channel, sentiment, assignee, and update information.
- **Conversation history** route for the support conversation workspace.
- **Performance view** for support-agent metrics and trends.
- **Recruiter view** for a public-facing portfolio presentation of the product.
- **Explainable AI recommendations** that return a decision, confidence score, and supporting reasons for a ticket.
- **Health and readiness endpoints** suitable for local checks or deployment probes.
- **Typed application boundaries** for tickets, metrics, repositories, and AI providers.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router
- React 18
- TypeScript with strict type checking
- Tailwind CSS
- `lucide-react` for interface icons
- Node.js built-in test runner
- In-memory demo repository with a SQLite-compatible replacement boundary

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Pratik-Jha2411/SupportIQ.git
cd SupportIQ
npm install
```

Create a local environment file:

```bash
cp .env.sample .env.local
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.sample .env.local
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

The demo works without external services. `.env.sample` documents the available configuration:

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | Local server port | `3000` |
| `AI_PROVIDER` | AI provider selection | `demo` |
| `AI_ENDPOINT` | Endpoint for a future external AI provider | empty |
| `AI_API_KEY` | Secret for a future external AI provider | empty |

Never commit `.env.local` or real API keys. The repository ignores local environment files.

## Application routes

### Pages

| Route | Purpose |
| --- | --- |
| `/` | Operations overview dashboard |
| `/tickets` | Ticket queue |
| `/conversations` | Conversation workspace |
| `/performance` | Team performance metrics |
| `/recruiter` | Public portfolio/recruiter view |

### API

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/healthz` | Returns `{ "status": "ok" }` |
| `GET` | `/api/readyz` | Returns readiness status for the repository and AI provider |
| `GET` | `/api/tickets` | Lists tickets; supports the optional `q` search parameter |
| `GET` | `/api/tickets/:id` | Returns a ticket and its AI recommendation |

Example API requests:

```bash
curl http://localhost:3000/api/healthz
curl "http://localhost:3000/api/tickets?q=invoice"
curl http://localhost:3000/api/tickets/SUP-1042
```

## Project structure

```text
src/
├── app/
│   ├── api/                 # Health, readiness, and ticket API routes
│   ├── conversations/      # Conversation workspace
│   ├── performance/        # Team performance view
│   ├── recruiter/          # Public portfolio view
│   ├── tickets/            # Ticket queue
│   ├── page.tsx            # Operations overview
│   └── layout.tsx          # Global layout and navigation
├── components/             # Reusable dashboard components
├── lib/
│   ├── ai.ts               # AI provider contract and demo provider
│   ├── data.ts             # Seed tickets and team metrics
│   └── repository.ts       # Ticket repository boundary
└── types/                  # Shared TypeScript domain types
tests/
└── smoke.test.js           # Health and readiness contract test
```

## Data and provider boundaries

The demo repository is implemented in [`src/lib/repository.ts`](./src/lib/repository.ts) and starts with the seed data in [`src/lib/data.ts`](./src/lib/data.ts). It exposes list, lookup, and update operations while keeping route handlers independent of storage details.

The AI integration is defined by the `AIProvider` interface in [`src/lib/ai.ts`](./src/lib/ai.ts). `DemoAIProvider` supplies deterministic recommendations for local development. A production implementation can call Azure OpenAI or another approved provider while preserving the same recommendation shape:

```ts
type Recommendation = {
  decision: string;
  confidence: number;
  reasons: string[];
};
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server after building |
| `npm test` | Run the Node.js smoke tests |
| `npm run lint` | Run the configured Next.js lint command |

Before opening a pull request, run:

```bash
npm test
npm run build
```

## Current limitations and next steps

- Ticket data is in memory and resets when the server restarts.
- Authentication and role-based access control are not included in the demo.
- The AI provider is deterministic demo logic rather than a live model integration.
- Conversation pages are currently presentation surfaces rather than full messaging workflows.
- A production deployment should add persistent storage, observability, secret management, authorization, and provider error handling.

## License

This project does not currently declare a license. Contact the repository owner before redistributing or using it outside the intended project context.
