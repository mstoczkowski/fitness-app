# ADR-0009: Feature Flags Strategy

## Status
Accepted

## Date
2026-01-23

## Context
The product is designed with progressive complexity:
- Beginner-first UX
- Advanced features unlocked over time
- AI-powered functionality introduced gradually

Feature flags are required to:
- Roll out features safely
- Experiment without branching codebases
- Support user segmentation
- Enable/disable AI features dynamically

## Decision
We adopt a centralized feature flag strategy with the following principles:
- Flags are evaluated on the backend
- Frontend consumes flags as configuration
- Flags are treated as temporary mechanisms, not permanent logic

## Key Decisions
### Flag Types
- Release flags - gradual rollout of new features
- Permission flags - role- or plan-based access
- Experiment flags - A/B testing and experimentation
- Kill switches - instant disablement of risky features (especially AI)

### Flag Evaluation
- Flags are resolved server-side
- User context (role, experience level, plan) is considered
- Frontend logic remains simple and declarative

### Lifecycle Management
Every flag has:
- Owner
- Purpose
- Expiration or removal plan

## Consequences
- Safe experimentation
- Reduced risk during AI rollouts
- Additional operational complexity if flags are not cleaned up
