# ADR-0010: CI/CD and Deployment Strategy

## Status
Accepted

## Date
2026-01-23

## Context
The project includes:
- Multiple frontend applications
- A backend API
- Background workers

The deployment pipeline must:
- Be reliable and repeatable
- Provide fast feedback
- Support independent deployments
- Scale with the codebase

## Decision
We adopt a pipeline-first CI/CD strategy:
- CI validates every change
- CD is automated but controlled
- Each application is deployed independently

## Key Decisions
### Continuous Integration
Triggered on every pull request.
Includes:
- Linting
- Type checking
- Tests
- Build verification

Turborepo caching is leveraged to reduce CI time.

### Continuous Deployment
- Web and admin apps deploy on merge to main
- Backend and workers deploy independently
- Feature flags are used to decouple deployment from release

## Consequences
- High confidence in main branch
- Fast iteration cycles
- Slightly more setup overhead initially
