# Long

## Platform Architecture

- Designed a type-safe C2C marketplace architecture with end-to-end type safety using tRPC for TypeScript, Zod schemas for runtime validation, and Kysely for query-safe database access
- Created a Turborepo/pnpm monorepo with 11+ packages: Expo mobile app (React Native 0.81), Next.js web app, tRPC API, and 8 shared packages (auth, db, UI, search, i18n, payments)
- Implemented multi-environment deployment pipelines with GitHub Actions: automated quality gates, database migrations, edge function deployment, release/version automation, and rollback procedures

## Semantic Search & AI/ML

- Developed a knowledge graph to estimate vehicle/parts compatibility, leveraging graph theory to provide rich contextual search
- Implemented semantic search with pgvector and local vector embeddings, enabling natural language queries backed by LCA relevance scoring, PostGIS distance sorting, and attribute filters for advanced discovery
- Implemented NLP parsing with OpenAI structured outputs to extract vehicle fitment data from unstructured text (e.g., "1964-1966 Mustang" → structured compatibility records)
- Implemented speech-to-text search feature using Expo speech recognition with real-time transcription parsing to structured inventory queries

## Payment & Transaction System

- Built custom SDK to integrate with Trustap/Stripe escrow and payment gateway, along with OAuth account linking, balance queries, and instant payout support
- Architected bidirectional event-driven transaction processing using PGMQ message queues and Cloudflare edge function ingestion of Trustap and Apple App Store events
- Built realtime offer negotiation management system with push notifications, buyer/seller action tracking, and offer history audit trail logging

## Authentication & Security

- Implemented enterprise authentication with Better Auth: OAuth/OIDC providers (Trustap, Apple, Facebook), email/password auth, and account linking
- Designed defense-in-depth security: Row-Level Security policies, tRPC client whitelisting, RBAC admin procedures, and webhook signature validation
- Built secure user context transactions that propagate JWT claims to PostgreSQL for RLS enforcement in all database operations

## Mobile Engineering

- Developed cross-platform mobile app with Expo SDK 52, React Native Paper (Material Design 3), and OTA updates
- Implemented offline-first patterns with React Query persistent cache (MMKV storage) and selective query persistence for offline-friendly operation

## Marketplace Features & UX

- Created user stories to design full-stack C2C marketplace flows: onboarding, listings, offers, profiles, and multi-step creation flows streamlined with dictation and natural language processing
- Fully integrated shipping with Shippo API for real-time rate calculation and label generation
- Implemented user reputation system with feedback, ratings, blocking, and abuse reporting
- Developed admin dashboard with user management, analytics, audit logs, and content moderation tools

## Data Infrastructure

- Designed PostgreSQL schema with 30+ tables, triggers, views, and stored procedures, using Supabase to auto-generate TypeScript types and Zod schemas
- Built a Playwright-based ingestion engine to construct a database of over 14,000 vehicle model variants, with AI-powered auomated verification using Perplexity grounded search

## Quality & Observability

- Established comprehensive testing infrastructure: Vitest (API unit and integration), Jest (mobile unit), and Maestro (mobile E2E)
- Integrated Sentry error tracking across all platforms with PII redaction, user context, and distributed correlation IDs

# Short

- **Architected a full-stack automotive marketplace** using TypeScript, React Native, Next.js, and PostgreSQL with end-to-end type safety via tRPC, Zod schemas, and Kysely for query-safe database access.
- **Built AI-powered vehicle data systems** including semantic search with pgvector embeddings, NLP parsing with OpenAI structured outputs to extract vehicle fitment from unstructured text, and a knowledge graph estimating vehicle/parts compatibility across 14,000+ model variants.
- **Designed event-driven transaction processing** with Trustap/Stripe escrow integration, PGMQ message queues, and Cloudflare edge function ingestion—handling real-time offer negotiation, payment flows, and audit trail logging.
- **Implemented defense-in-depth security architecture** with Row-Level Security policies, OAuth/OIDC multi-provider auth (Better Auth), JWT claim propagation to PostgreSQL, and webhook signature validation.
- **Established CI/CD and quality infrastructure** using GitHub Actions for automated migrations, deployment pipelines, and rollback procedures, alongside comprehensive testing with Vitest, Jest, and Maestro E2E.
- **Engineered data ingestion pipelines** with Playwright-based scraping and AI-powered verification using Perplexity grounded search to build and validate a vehicle database spanning decades of automotive platforms.
