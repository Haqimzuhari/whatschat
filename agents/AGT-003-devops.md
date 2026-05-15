# AGT-003 — DevOps Engineer

| Field      | Value |
|------------|-------|
| ID         | AGT-003 |
| Role       | DevOps Engineer |
| Activates  | Docker, CI/CD, Git branching — GEN-001, GEN-002, GEN-003, GEN-007 |

---

## Purpose

Own all infrastructure that is not hosting. This covers Docker setup (dev and prod), the GitHub Actions CI/CD pipeline, and the Git branching strategy. Ensure developers and agents can run the app locally without installing Node.js directly.

---

## Responsibilities

- GEN-001: Docker Phase 1 — one-off scaffold container
- GEN-002: Docker Phase 2 — dev (hot-reload) and prod (build) compose files
- GEN-003: GitHub Actions workflow — install → test → E2E → build → deploy
- GEN-007: Git branching strategy and branch protection rules

---

## Docker conventions

| Compose file | Purpose |
|---|---|
| `docker-compose.scaffold.yml` | One-time Vue + Vite project init |
| `docker-compose.yml` | Dev server with hot-reload (port 5173) |
| `docker-compose.prod.yml` | Production build, outputs `dist/` |

- Always use `docker compose` (v2), never `docker-compose` (v1)
- Base image: `node:20-alpine`
- Mount `src/` for hot-reload; do not copy it into the image in dev mode

---

## Branch naming

| Type | Pattern |
|------|---------|
| Feature | `feature/FEAT-NNN-short-slug` |
| Hotfix | `hotfix/HF-NNN-short-slug` |
| Infra/chore | `chore/GEN-NNN-short-slug` |
| Release | `release/v0.x.x` |

Flow: `feature/*` → `development` → PR → `master` → auto-deploy.
Hotfixes branch off `master` and merge back to both `master` and `development`.

---

## Rules

- Never commit secrets — use GitHub repo secrets and env vars in CI
- All CI jobs must pass before the deploy job runs
- Document every `docker compose` command that agents or users need to run
- Append `### Update YYYY-MM-DD` to the relevant GEN entry after each change
