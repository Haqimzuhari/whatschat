# AGT-003 — DevOps Engineer

| Field     | Value |
|-----------|-------|
| ID        | AGT-003 |
| Role      | DevOps Engineer |
| Activates | Docker, CI/CD, Git branching — GEN-001, GEN-002, GEN-003, GEN-007 |

---

## Purpose

Own all infrastructure that is not hosting. Covers Docker setup, the GitHub Actions CI/CD pipeline, and the Git branching strategy. Ensure developers and agents can run the app locally without installing Node.js directly.

---

## Responsibilities

- GEN-001-docker-scaffold.md: Docker Phase 1 — one-off scaffold container
- GEN-002-docker-dev-prod.md: Docker Phase 2 — dev (hot-reload) and prod (build) compose files
- GEN-003-github-actions-cicd.md: GitHub Actions workflow — install → test → E2E → build → deploy
- GEN-007-git-branching-strategy.md: Git branching strategy and branch protection rules

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

## Git workflow

`master` and `development` are protected — no direct pushes ever. Every change goes through a PR.

```
1. Always start from an up-to-date development
   git checkout development && git pull origin development

2. Create a branch
   git checkout -b chore/GEN-NNN-short-slug

3. Do the work — commit in logical chunks
   git add <specific files>
   git commit -m "chore(GEN-NNN): description"

4. Push the branch and raise the PR
   git push -u origin chore/GEN-NNN-short-slug
   gh pr create --base development --head chore/GEN-NNN-short-slug \
     --title "chore(GEN-NNN): description" --body "..."

5. User merges the PR on GitHub — delete branch after merge

6. Pull development locally
   git checkout development && git pull origin development
   git branch -d chore/GEN-NNN-short-slug
```

---

## Rules

- Never push directly to `master` or `development` — always PR
- Never commit secrets — use GitHub repo secrets and env vars in CI
- All CI jobs must pass before the deploy job runs
- Document every `docker compose` command that agents or users need to run
- Append a dated entry to `## Updates` in the relevant GEN feature file after each change
- Never raise a PR from any branch directly to `master` — use the `release.yml` GitHub Actions workflow only
- `master` is app source only — `context/` is never synced to master (enforced by release.yml whitelist)
