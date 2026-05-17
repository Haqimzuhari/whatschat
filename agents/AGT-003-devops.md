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

## Git workflow

`master` and `development` are protected — no direct pushes ever. Every change goes through a PR.

### Standard workflow (feature / chore)

```
1. Always start from an up-to-date development
   git checkout development
   git pull origin development

2. Create a branch
   git checkout -b chore/GEN-NNN-short-slug

3. Do the work — commit in logical chunks
   git add <specific files>
   git commit -m "chore(GEN-NNN): description"

4. Push the branch
   git push -u origin chore/GEN-NNN-short-slug

5. Raise the PR using gh CLI (no manual GitHub navigation needed)
   gh pr create \
     --base development \
     --head chore/GEN-NNN-short-slug \
     --title "chore(GEN-NNN): description" \
     --body "$(cat <<'EOF'
   ## Summary
   - bullet points

   ## Test plan
   - [ ] test items

   🤖 Generated with Claude Code
   EOF
   )"

6. User merges the PR on GitHub — delete branch after merge

7. Pull development locally
   git checkout development
   git pull origin development
   git branch -d chore/GEN-NNN-short-slug
```

### Hotfix workflow

```
1. git checkout master && git pull origin master
2. git checkout -b hotfix/HF-NNN-short-slug
3. Fix, commit, push
4. gh pr create --base master --head hotfix/HF-NNN-short-slug --title "..." --body "..."
5. User merges PR → master
6. gh pr create --base development --head hotfix/HF-NNN-short-slug --title "..." --body "..."
7. User merges PR → development (keep in sync)
8. Delete hotfix branch
```

### gh CLI setup (one-time, device level)

```
brew install gh
gh auth login   # opens browser — sign in with GitHub account
```

Required once per machine. After that, all agents can raise PRs from the terminal.

### Branch naming

| Type | Pattern |
|------|---------|
| Feature | `feature/FEAT-NNN-short-slug` |
| Hotfix | `hotfix/HF-NNN-short-slug` |
| Infra/chore | `chore/GEN-NNN-short-slug` |
| Release | `release/v0.x.x` |

---

## Rules

- Never push directly to `master` or `development` — always PR
- Never commit secrets — use GitHub repo secrets and env vars in CI
- All CI jobs must pass before the deploy job runs
- Document every `docker compose` command that agents or users need to run
- Append `### Update YYYY-MM-DD` to the relevant GEN entry after each change
- Never raise a PR from any branch directly to `master` — use the `release.yml` GitHub Actions workflow only
- `master` is app source only — the release workflow enforces the whitelist: src/, public/, index.html, vite.config.js, tailwind.config.js, postcss.config.js, package.json, package-lock.json, docker-compose files, .gitignore, .github/
