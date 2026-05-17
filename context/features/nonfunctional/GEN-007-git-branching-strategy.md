## Description
Branching strategy, naming conventions, PR workflow, and branch protection rules for the project.

## Context
Ensures all agents and contributors follow a consistent flow. `master` and `development` are protected — all changes go through PRs. Release to production is handled by GEN-003-github-actions-cicd.md.

## Details
- [x] Create `master` branch (stable, auto-deploys via GEN-003-github-actions-cicd.md)
- [x] Create `development` branch from master (active development)
- [x] Document branch naming conventions
- [x] Configure branch protection on `master` and `development` (active on GitHub via Ruleset)

## Status
complete

## Updates

### 2026-05-16
`master` confirmed on remote. `development` created and pushed. Naming conventions documented in `PROJECT.md`. Branch protection not available via CLI at the time — must be configured in GitHub Settings.

### 2026-05-16 (protection active)
Repo changed from private to public — branch protection now available on free plan. Rules enabled on both `master` and `development`: require PR before merging, no direct pushes. Additional branch prefixes added: `docs/` for documentation updates, `config/` for config file changes.

---

## Branch naming reference

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/FEAT-NNN-short-slug` | `feature/FEAT-001-country-dropdown` |
| Infra/chore | `chore/GEN-NNN-short-slug` | `chore/GEN-002-docker-dev` |
| Docs/progress | `docs/short-slug` | `docs/session-close` |
| Config | `config/short-slug` | `config/vite-base-path` |
| Release | `release/YYYY-MM-DD` | `release/2026-05-17` |

## PR workflow

```
1. Branch off development
   git checkout development && git pull origin development
   git checkout -b feature/FEAT-NNN-short-slug

2. Do the work — commit as you go
   git add <files>
   git commit -m "feat(FEAT-NNN): description"

3. Push and raise PR
   git push -u origin feature/FEAT-NNN-short-slug
   gh pr create --base development --head feature/FEAT-NNN-short-slug \
     --title "feat(FEAT-NNN): description" --body "..."

4. User merges on GitHub — delete branch after merge

5. Pull development locally
   git checkout development && git pull origin development
```

## Release to production

```
1. Go to GitHub → Actions → "Prepare Release to Master" → Run workflow
2. Workflow syncs whitelisted app files from development to a release/YYYY-MM-DD branch and raises PR to master
3. Review PR diff — confirm no context/ files are included
4. Merge PR → deploy.yml triggers automatically → app deploys to Pages
```
