# ADR-0005: Authentication and Authorization

## Status
Accepted

## Date
2026-01-23

## Context
The system serves multiple user types:
- End users
- Admin users
- (Future) Trainers / coaches

Authentication and authorization must:
- Be secure and scalable
- Work across web and mobile
- Support role-based access
- Avoid custom security implementations where possible

## Decision
We adopt:
- External authentication provider for identity
- Backend-managed authorization
- Role-based access control (RBAC)

## Key Decisions
### Authentication
- Authentication is delegated to a managed provider (e.g. OAuth/OIDC)
- Backend trusts identity tokens and maps them to internal users
- No password handling in the backend

### Authorization
- Authorization logic lives exclusively in the backend
- Roles (user, admin, trainer) are explicit
- Permissions are enforced at the API layer

## Alternatives Considered
- Custom auth implementation (rejected due to security risk)
- Client-side authorization (rejected due to bypass risk)

## Consequences
- Reduced security surface
- Clear separation between identity and permissions
- Easy expansion to new roles
