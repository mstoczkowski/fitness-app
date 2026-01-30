# ADR-0006: Observability and Monitoring

## Status
Accepted

## Date
2026-01-23

## Context
The system includes:
- Multiple clients
- Async workers
- AI features with probabilistic behavior

Observability is required to:
- Detect errors early
- Understand user behavior
- Evaluate AI feature quality
- Debug distributed issues

## Decision
We adopt observability-by-default with the following pillars:
- Logging
- Error tracking
- Metrics
- Tracing (progressive)

## Key Decisions
### Error Tracking
Centralized error tracking across:
- Web
- Mobile
- Backend

Errors include contextual metadata.

### Logging
- Structured logs (JSON)
- Correlation IDs across services

### Metrics
- Request latency
- Error rates
- Background job duration
- AI task success/failure

### AI Observability
- AI inputs and outputs are logged (with privacy safeguards)
- Outputs are evaluated for usefulness and correctness

## Consequences
- Faster debugging
- Safer AI iteration
- Production-like discipline from day one
