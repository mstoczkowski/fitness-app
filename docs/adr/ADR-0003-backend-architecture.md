# ADR-0003: Backend Architecture

## Status
Accepted

## Date
2026-01-23

## Context
The backend serves multiple frontend clients (web, admin, mobile) and is responsible for:
- Authentication and authorization
- Core domain logic (workouts, exercises, plans, progress)
- Data persistence
- Analytics and reporting
- AI-powered features (analysis, summaries, recommendations)

The backend must:
- Be easy to reason about and extend
- Support async/background processing
- Expose a stable, well-typed API
- Scale from early-stage usage to production workloads
- Be suitable for learning modern backend and platform practices

## Decision
We decided to implement the backend using:
- Python as the primary language
- FastAPI as the web framework
- PostgreSQL as the primary database
- Background workers for async and AI-related tasks
- API-first architecture with OpenAPI as the contract

## Architecture Overview
### Core Components
`API Service`
FastAPI
Handles HTTP requests, auth, validation, orchestration

`Database`
PostgreSQL
Relational schema optimized for workout and time-series-like data

`Worker Service`
Background jobs (reports, AI analysis, notifications)

`Shared Domain Layer`
Explicit domain models and services
Business logic isolated from transport (HTTP)

### Communication
Frontends communicate only via HTTP APIs
Workers consume jobs from a queue (e.g. Redis-backed)

## Key Architectural Decisions
### 1. FastAPI as the Web Framework
FastAPI was chosen due to:
- First-class OpenAPI generation
- Strong typing via Pydantic
- Excellent async support
- High developer productivity

### 2. Clear Separation of Concerns
- API layer: request/response handling
- Domain layer: business rules
- Persistence layer: database access
- Worker layer: long-running and async tasks

This separation improves testability and maintainability.

### 3. Async and Background Processing
Operations that should not block user requests are handled asynchronously:
- AI analysis and summaries
- Report generation
- Notifications
- Periodic maintenance tasks

### 4. Database-First Domain Modeling
The schema is designed to:
- Support progressive feature complexity (beginner -> advanced)
- Preserve historical workout data
- Enable analytics and AI usage later

Nullable fields are used to allow gradual feature exposure.

## Alternatives Considered
### Node.js Backend
Pros:
- Same language as frontend

Cons:
- Weaker data/ML ecosystem
- Less ergonomic for analytics-heavy workloads

### Django
Pros:
- Batteries included
- Mature ecosystem

Cons:
- Heavier abstractions
- Slower iteration for API-first systems

## Consequences
### Positive
- Strong typing and API contracts
- Excellent fit for AI and data processing
- Clean separation of responsibilities
- Scales from MVP to production

### Negative
- Two-language stack (TS + Python)
- Requires discipline to keep domain logic out of controllers

## Future Considerations
Introduction of read replicas or analytics pipelines
Potential move to event-based processing for advanced analytics
