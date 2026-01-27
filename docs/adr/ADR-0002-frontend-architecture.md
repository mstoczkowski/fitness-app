# ADR-0002: Frontend Architecture

## Status
Accepted

## Date
2026-01-23

## Context
The project includes multiple frontend clients that serve different use cases:
- Web application (user-facing)
- Admin panel (internal / operational)
- Mobile application (iOS and Android)

The frontend architecture must:
- Support multiple applications with shared logic and UI
- Maximize code reuse without tight coupling
- Enable fast iteration and predictable scaling
- Remain approachable for a solo / small team
- Integrate cleanly with a Python (FastAPI) backend via a typed API
- Work well with AI-assisted development workflows

## Decision
We decided on the following frontend architecture principles:
- Monorepo-based multi-app architecture
- Next.js for web and admin applications
- Expo (React Native) for mobile applications
- Shared packages for UI components, API client, and configuration
- TypeScript-first development across all frontend clients
- API-driven architecture with generated, typed clients

## Architecture Overview
### Applications
`apps/web`
User-facing web application built with Next.js (App Router)

`apps/admin`
Internal admin panel built with Next.js, sharing infrastructure and patterns with web

`apps/mobile`
Mobile application built with Expo / React Native

### Shared Packages
`packages/ui`
Shared, platform-aware UI components (design system primitives)

`packages/api-client`
Generated TypeScript API client from the backend OpenAPI specification

`packages/config`
Shared configuration (TypeScript config, linting rules, formatting)

## Key Architectural Decisions
### 1. App-Level Isolation
Each application is treated as an independent deployment unit:
- Separate routing
- Separate environment configuration
- Independent release cadence

This avoids cross-app coupling while still allowing shared logic via packages.

### 2. Shared UI via Design System
UI reuse is achieved through a shared component library:
- Platform-agnostic primitives where possible
- Platform-specific adapters when necessary (web vs mobile)
- No direct imports between apps

This balances reuse with flexibility.

### 3. Typed API Boundary
All frontend clients communicate with the backend exclusively through a typed API client:
- OpenAPI schema generated from FastAPI
- Type-safe requests and responses
- Centralized error handling patterns

This ensures contract stability and prevents drift between frontend and backend.

### 4. State Management and Data Fetching
TanStack Query is used for:
- Server state
- Caching
- Background refetching

Local UI state remains inside components or lightweight stores when necessary.
This keeps state management simple and predictable.

### 5. Validation Strategy
Zod is used on the frontend for:
- Form validation
- Runtime data validation

Backend uses Pydantic for schema validation.
Frontend validation mirrors backend constraints but does not replace backend validation.

### 6. Feature Progressive Disclosure
The frontend supports progressive feature exposure:
- Beginner-friendly default UI
- Advanced features unlocked via feature flags or user state

Avoids overwhelming new users while allowing long-term growth.

## AI-Assisted Development Considerations
The architecture is designed to work well with AI tools:
- Clear folder boundaries reduce AI-generated architectural drift
- Shared packages provide explicit reuse points
- Typed APIs reduce hallucinated contracts
- Low reliance on custom DSLs minimizes configuration breakage

AI is treated as a productivity multiplier, not a source of architectural decisions.

## Alternatives Considered
### Single Web App + PWA
Pros:
- Lower initial complexity
- Single codebase

Cons:
- Limited native capabilities on mobile
- Poor fit for offline-first training workflows

### Fully Shared UI Across Web and Mobile
Pros:
- Maximum code reuse

Cons:
- Tight coupling
- Compromised UX on at least one platform
- Increased complexity over time

## Consequences
### Positive
- Clear separation of concerns
- Scales from solo development to larger teams
- Strong type safety across the stack
- Good fit for multi-platform product strategy
- Predictable and maintainable frontend codebase

### Negative
- Higher initial setup cost compared to a single-app approach
- Requires discipline to maintain boundaries between apps and packages

## Future Considerations
Introduction of micro-frontends is not planned and not required.
Additional shared packages may be added as the product evolves.
Mobile-specific features may diverge further from web over time.
