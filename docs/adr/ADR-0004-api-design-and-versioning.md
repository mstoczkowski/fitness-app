# ADR-0004: API Design and Versioning

## Status
Accepted

## Date
2026-01-23

## Context
The API is consumed by multiple clients with different release cycles:
- Web
- Mobile
- Admin

The API must:
- Be stable and predictable
- Allow evolution without breaking existing clients
- Be easy to reason about and test
- Support AI-assisted development safely

## Decision
We decided on the following API design principles:
- RESTful, resource-oriented API
- Explicit versioning via URL (/v1)
- OpenAPI as the source of truth
- Typed client generation for frontend usage

## Key Design Principles
### 1. Versioned API
All endpoints are versioned:
`/api/v1/...`

Breaking changes require a new major version.

### 2. Consistent Error Shape
Errors follow a predictable structure:
- machine-readable code
- human-readable message
- optional metadata

This enables robust frontend error handling.

### 3. Explicit Contracts
- Request and response schemas are explicitly defined
- No implicit or undocumented fields
- Backward compatibility is prioritized

### 4. Generated Clients
Frontend applications do not call fetch directly:
- API clients are generated from OpenAPI
- Types are shared automatically
- Reduces contract drift

## Alternatives Considered
### GraphQL
Pros:
- Flexible queries

Cons:
- Higher complexity
- Harder caching
- More surface area for AI-generated misuse

### Unversioned REST
Pros:
- Less boilerplate

Cons:
- Unsafe for mobile clients
- Breaks consumers silently

## Consequences
### Positive
- Strong contract guarantees
- Easier frontend/backend coordination
- Safer AI-assisted development

### Negative
- Slightly more upfront structure
- Requires discipline around versioning

## Future Considerations
Possible introduction of /v2 with advanced analytics endpoints
Internal-only admin APIs may evolve faster than public ones
