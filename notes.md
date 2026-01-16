Part Out - C2C Classic Car Parts Marketplace

Resume Entry: Full-Stack Engineer / Technical Lead

Summary

Architected and built a consumer-to-consumer marketplace for classic car parts from inception over 9 months, delivering a production-ready mobile and web platform with 9,600+ commits.

---

Technical Accomplishments

Platform Architecture

- Designed and implemented a Turborepo monorepo with 11+ packages: Expo mobile app (React Native 0.81), Next.js web app, tRPC API, and 8 shared packages (auth, db, UI, search, i18n, payments)
- Built type-safe full-stack architecture using tRPC for end-to-end TypeScript, Zod schemas for runtime validation, and Kysely for query-safe database access
- Implemented multi-environment deployment pipelines with GitHub Actions: automated quality gates, database migrations, edge function deployment, and rollback procedures

Semantic Search & AI/ML

- Engineered AI-powered semantic search using pgvector embeddings, enabling natural language queries for vehicle parts with relevance scoring
- Built NLP compatibility parsing with OpenAI structured outputs to extract vehicle fitment data from unstructured text (e.g., "1964-1966 Mustang" → structured compatibility records)
- Implemented speech-to-search feature using Expo speech recognition with real-time transcription parsing to structured inventory queries
- Designed graceful degradation patterns with local fallback parsers when AI services unavailable

Payment & Transaction System

- Integrated Trustap escrow payment gateway with OAuth account linking, balance queries, and instant payout support
- Architected event-driven transaction processing using PostgreSQL message queues (pgmq) for reliable webhook handling with dead-letter queue support
- Built comprehensive offer management system with state machine, audit trail (JSONB history), and buyer/seller action tracking

Authentication & Security

- Implemented enterprise authentication with Better Auth: OAuth providers (Trustap, Apple, Facebook), email/password, and account linking to prevent duplicates
- Designed defense-in-depth security: Row-Level Security policies, tRPC client whitelisting, RBAC admin procedures, and webhook signature validation
- Built secure user context transactions that propagate JWT claims to PostgreSQL for RLS enforcement in all database operations

Mobile Engineering

- Developed cross-platform mobile app with Expo SDK 52, React Native Paper (Material Design 3), and expo-router navigation
- Implemented offline-first patterns with React Query persistent cache (MMKV storage) and selective query persistence
- Optimized performance with memoization strategies (useMemo, useCallback, React.memo) across 64+ component optimizations

Database & Infrastructure

- Designed PostgreSQL schema with 30+ tables, triggers, views, and stored procedures using Supabase with auto-generated TypeScript types
- Implemented geographic search with PostGIS for location-based part discovery and distance-based matching
- Built shipping integration with Shippo API for real-time rate calculation and label generation

Quality & Observability

- Established comprehensive testing infrastructure: Vitest (API), Jest (mobile unit), Maestro (mobile E2E), with PGMQ-based integration testing
- Integrated Sentry error tracking across all platforms with PII redaction, user context, and distributed correlation IDs
- Maintained zero-tolerance quality bar: no any types, 100% typecheck pass rate, automated linting with Turbo caching

Marketplace Features

- Built intelligent matching algorithm connecting buyers (project vehicles) with sellers (spare parts) using compatibility data and quality scoring
- Implemented user reputation system with feedback, ratings, blocking, and abuse reporting
- Developed admin dashboard with user management, analytics, audit logs, and content moderation tools

---

Metrics

- 9,600+ commits over 9 months of active development
- 11 shared packages enabling code reuse across mobile and web
- 30+ database tables with comprehensive RLS security policies
- Full CI/CD automation with staging/production environments and hotfix support

---

Would you like me to tailor these bullet points for a specific role (e.g., mobile-focused, backend-focused, full-stack lead) or adjust the technical depth?
