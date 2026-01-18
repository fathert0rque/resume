Platform Architecture

Designed and implemented a Turborepo monorepo with 11+ packages: Expo mobile app (React Native 0.81), Next.js web app, tRPC API, and 8 shared packages (auth, db, UI, search, i18n, payments)
Built type-safe full-stack C2C marketplace architecture using tRPC for end-to-end TypeScript, Zod schemas for runtime validation, and Kysely for query-safe database access
Implemented multi-environment deployment pipelines with GitHub Actions: automated quality gates, database migrations, edge function deployment, release/version automation, and rollback procedures

Semantic Search & AI/ML

Engineered AI-powered semantic search using pgvector embeddings with edge-function migrations, enabling natural language queries for vehicle parts with relevance scoring
Built unified keyword search with PostGIS distance sorting and filters alongside semantic search for advanced discovery
Built NLP compatibility parsing with OpenAI structured outputs to extract vehicle fitment data from unstructured text (e.g., "1964-1966 Mustang" → structured compatibility records)
Implemented speech-to-search feature using Expo speech recognition with real-time transcription parsing to structured inventory queries
Designed graceful degradation patterns with local fallback parsers when AI services unavailable

Payment & Transaction System

Integrated Trustap escrow payment gateway with OAuth account linking, typed SDK, balance queries, and instant payout support
Architected event-driven transaction processing using PostgreSQL message queues (pgmq) with Cloudflare-routed webhooks and edge-function ingestion for Trustap and Apple App Store events
Built comprehensive offer management system with state machine, offer status/history logging, audit trail (JSONB history), and buyer/seller action tracking

Authentication & Security

Implemented enterprise authentication with Better Auth: OAuth/OIDC providers (Trustap, Apple, Facebook), email/password, and account linking to prevent duplicates
Designed defense-in-depth security: Row-Level Security policies, tRPC client whitelisting, RBAC admin procedures, and webhook signature validation
Built secure user context transactions that propagate JWT claims to PostgreSQL for RLS enforcement in all database operations

Mobile Engineering

Developed cross-platform mobile app with Expo SDK 52, React Native Paper (Material Design 3), and expo-router navigation
Implemented offline-first patterns with React Query persistent cache (MMKV storage) and selective query persistence for offline-friendly operation
Optimized performance with memoization strategies (useMemo, useCallback, React.memo) across 64+ component optimizations

Marketplace Features & UX

Built full-stack C2C marketplace flows: onboarding, listings, offers, profiles, and multi-step create flows with compatibility capture UIs and richer search/listing cards
Built intelligent matching algorithm connecting buyers (project vehicles) with sellers (spare parts) using compatibility data and quality scoring
Implemented user reputation system with feedback, ratings, blocking, and abuse reporting
Developed admin dashboard with user management, analytics, audit logs, and content moderation tools

Database & Infrastructure

Designed PostgreSQL schema with 30+ tables, triggers, views, and stored procedures using Supabase with auto-generated TypeScript types
Implemented geographic search with PostGIS for location-based part discovery and distance-based matching
Built shipping integration with Shippo API for real-time rate calculation and label generation

Quality & Observability

Established comprehensive testing infrastructure: Vitest (API), Jest (mobile unit), Maestro (mobile E2E), with PGMQ-based integration testing
Built data and ops tooling: Playwright-based ingester with AI enrichment and realistic seeders for development/testing
Integrated Sentry error tracking across all platforms with PII redaction, user context, and distributed correlation IDs
Maintained zero-tolerance quality bar: no any types, 100% typecheck pass rate, automated linting with Turbo caching

---

Architected Turborepo monorepo (11+ packages) with Expo mobile app, Next.js web, tRPC API, and shared packages for auth, database, UI, search, i18n, and payments—fully type-safe with Zod validation and Kysely queries
Engineered AI-powered semantic search using pgvector embeddings and NLP compatibility parsing (OpenAI structured outputs) to extract vehicle fitment from unstructured text; built speech-to-search with real-time transcription
Integrated Trustap escrow payments with OAuth account linking and architected event-driven transaction processing using PostgreSQL message queues (pgmq) with webhook ingestion for payment and App Store events
Implemented enterprise auth with Better Auth (OAuth/OIDC, Apple, Facebook, email/password, account linking) and defense-in-depth security: Row-Level Security policies, RBAC, client whitelisting, and webhook signature validation
Developed cross-platform mobile app (Expo SDK 52, React Native Paper) with offline-first patterns using React Query persistent cache (MMKV) and 64+ memoization optimizations
Designed PostgreSQL schema (30+ tables, triggers, views, stored procedures) with PostGIS for location-based discovery and distance sorting
Built comprehensive marketplace features: multi-step listing flows, intelligent buyer-seller matching via compatibility scoring, reputation system with ratings/blocking, and admin dashboard with moderation tools
Established testing infrastructure (Vitest, Jest, Maestro E2E), Playwright-based data ingestion with AI enrichment, Sentry observability with PII redaction, and zero-tolerance quality bar (no any types, 100% typecheck pass)
