# ADR-0000: System Architecture Overview

## Status
Accepted

## Date
2026-01-23

## Context
This project is a multi-platform fitness SaaS application consisting of:
- Web application
- Admin panel
- Mobile applications (iOS & Android)
- Backend API
- Background workers
- AI-powered analysis and recommendation features

The system must:
- Support rapid iteration in early stages
- Scale technically and organizationally over time
- Remain understandable for a small team
- Integrate AI safely and predictably
- Maintain strong contracts between components

## Decision
We adopt a modular, API-driven architecture with the following principles:
- Monorepo with clear app and package boundaries
- Backend-as-a-service for all clients
- Strong typing across service boundaries
- Progressive complexity (beginner -> advanced)
- AI as an additive capability, not a foundational dependency

## High-Level Architecture
### Clients
- Web App (Next.js) - primary user-facing interface
- Admin App (Next.js) - operational and content management
- Mobile App (Expo / React Native) - execution-focused, offline-friendly

### Backend
- API Service (FastAPI) - synchronous request handling
- Worker Service - async jobs, AI tasks, reporting
- Database (PostgreSQL) - primary persistence
- Cache / Queue (Redis) - background processing

### Shared Infrastructure
- Typed API contracts (OpenAPI)
- Centralized observability
- Feature flags for progressive rollout

## Architectural Principles
- Explicit boundaries over implicit coupling
- Simplicity over premature optimization
- Evolutionary design with safe migration paths
- Human-owned architecture, AI-assisted execution

## Consequences
This architecture enables:
- Independent evolution of clients
- Strong correctness guarantees
- Sustainable growth from MVP to production
