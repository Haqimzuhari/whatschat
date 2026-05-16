# Project docs

Central knowledge base for the WhatsApp Link Generator project. Every decision, task, session, and fix is tracked here. **Append, never overwrite.**

---

## Running locally

No local Node.js required — everything runs in Docker.

**Dev server (hot-reload, port 5173):**
```sh
docker compose up
```
Open http://localhost:5173. Stop with `docker compose down`.

**Production build (outputs `dist/`):**
```sh
docker compose -f docker-compose.prod.yml run --rm build
```

---

## Folder structure

```
project-docs/
│
├── PROJECT.md                       ← this file — start here
│
├── agents/                          ← AI agent definitions
│   ├── AGT-000-coordinator.md       ← orchestrator — always activate first
│   ├── AGT-001-architect.md         ← tech decisions, scaffold, config
│   ├── AGT-002-frontend.md          ← Vue 3 app, all FEAT-NNN work
│   ├── AGT-003-devops.md            ← Docker, CI/CD, branching
│   ├── AGT-004-qa.md                ← Vitest, Playwright, coverage
│   └── AGT-005-deployment.md        ← GitHub Pages, hosting, env vars
│
├── progress/
│   └── PROGRESS.md                  ← session log + milestone tracker
│
├── features/
│   └── FEATURES.md                  ← append-only feature registry
│
├── hotfixes/
│   └── HOTFIXES.md                  ← bug + hotfix log
│
└── general/
    └── GENERAL.md                   ← infra, testing, deploy tasks
```

---

## ID system

Every task, feature, fix, and agent has a unique ID. Cross-reference freely across all files.

| Prefix | File | Covers |
|--------|------|--------|
| `AGT-NNN` | `agents/` | Agent definitions and behaviour |
| `FEAT-NNN` | `features/FEATURES.md` | User-facing features |
| `HF-NNN` | `hotfixes/HOTFIXES.md` | Bug fixes and hotfixes |
| `GEN-NNN` | `general/GENERAL.md` | Infra, tooling, testing, deployment |

---

## Agent roster

| ID | Agent | Activates for |
|----|-------|---------------|
| AGT-000 | Project Coordinator | Every session — reads state, delegates, closes |
| AGT-001 | Project Architect | Tech decisions, scaffold, config files, ADRs |
| AGT-002 | Frontend Developer | All FEAT-NNN implementation |
| AGT-003 | DevOps Engineer | Docker, CI/CD, Git branching (GEN-001/002/003/007) |
| AGT-004 | QA Engineer | Tests and coverage (GEN-005/006) |
| AGT-005 | Deployment Strategist | Hosting, env vars, live verification (GEN-004) |

**Always activate AGT-000 first.** It reads `PROGRESS.md`, confirms current state, and delegates to the right specialist.

---

## Branching strategy

### Protected branches

| Branch | Purpose | Convention |
|--------|---------|------------|
| `master` | Stable — auto-deploys to GitHub Pages | Never push directly. PR from `development` only. |
| `development` | Integration — all work lands here first | Never push directly. PR from feature/chore/hotfix branches only. |

Direct pushes to `master` or `development` are forbidden by convention. Everything goes through a PR.

### Branch naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/FEAT-NNN-short-slug` | `feature/FEAT-001-country-dropdown` |
| Hotfix | `hotfix/HF-NNN-short-slug` | `hotfix/HF-001-phone-sanitiser` |
| Infra / chore | `chore/GEN-NNN-short-slug` | `chore/GEN-002-docker-dev` |
| Release | `release/v0.x.x` | `release/v1.0.0` |

### Full workflow

```
1. Branch off development
   git checkout development
   git pull origin development
   git checkout -b feature/FEAT-NNN-short-slug

2. Do the work — commit as you go
   git add <files>
   git commit -m "feat(FEAT-NNN): description"

3. Push branch to GitHub
   git push -u origin feature/FEAT-NNN-short-slug

4. Open a Pull Request on GitHub
   Base: development  ←  Compare: feature/FEAT-NNN-short-slug
   Title: follows commit message convention
   Review the diff, confirm it looks right

5. Merge the PR on GitHub
   Use "Squash and merge" or "Merge commit" — be consistent
   Delete the branch after merge (GitHub offers this automatically)

6. Pull development locally
   git checkout development
   git pull origin development
   git branch -d feature/FEAT-NNN-short-slug  (delete local branch)
```

### Hotfix workflow

Hotfixes are urgent — they branch off `master`, not `development`:

```
1. git checkout master && git pull origin master
2. git checkout -b hotfix/HF-NNN-short-slug
3. Fix, commit, push
4. PR → master (merge immediately)
5. PR → development (keep them in sync)
6. Delete hotfix branch
```

### Releasing to production

When `development` is stable and ready to ship:

```
1. Open a PR: development → master
2. Review, confirm CI passes
3. Merge — GitHub Actions auto-deploys to GitHub Pages
```

### Branch protection

GitHub branch protection rules require a paid plan for private repos. Protection is enforced by convention instead — no agent or contributor should ever push directly to `master` or `development`. If the repo is made public in future, classic branch protection rules can be enabled for free.

### Exception — pure doc and progress updates

Doc-only changes may be committed directly to `development` without a branch or PR. This applies only when **all** changed files are within:

- `progress/PROGRESS.md`
- `general/GENERAL.md`
- `features/FEATURES.md`
- `hotfixes/HOTFIXES.md`
- `agents/*.md`
- `PROJECT.md`
- `README.md`

No source code, config, Docker, or CI files. If in doubt, use a branch.

---

## The one rule

**Append, never overwrite.** To update any entry, add a dated block below it. This preserves full history and lets any agent or person resume a session with full context.

---

## How to start a session

1. Open `progress/PROGRESS.md` — read "Last known state"
2. Activate **AGT-000** with your session goal
3. AGT-000 reads state, identifies the correct agent, and issues a delegation block
4. The delegated agent reads its definition file (`agents/AGT-NNN-*.md`) and the relevant task entries
5. Work proceeds on the correct FEAT/GEN/HF entry
6. At session end, AGT-000 archives the session and updates `PROGRESS.md`

---

## Project context

**What:** A single-page web app that generates a `wa.me/` WhatsApp link from a phone number. No contact saving required. No extra apps. Works on mobile and desktop.

**Stack:** Vue 3 · Vite · Tailwind CSS · Inter font · Vitest · Playwright

**Hosting:** GitHub Pages (free, HTTPS, static SPA)

**Use case:** Buyer wants to message a seller using only a phone number — one-time conversation, no contact saved.

---

## Current feature list

| ID | Feature | Status |
|----|---------|--------|
| FEAT-001 | Country dropdown with search | planned |
| FEAT-002 | Phone input and sanitiser | planned |
| FEAT-003 | WhatsApp link generator | planned |
| FEAT-004 | Copy and open-tab buttons | planned |
| FEAT-005 | Validation and toasts | planned |
| FEAT-006 | Dark and light mode | planned |
| FEAT-007 | Responsive + mobile keyboard UX | planned |
| FEAT-008 | Geolocation auto-select country | planned |

---

## Current infrastructure list

| ID | Task | Status |
|----|------|--------|
| GEN-001 | Docker Phase 1 — scaffold | complete |
| GEN-002 | Docker Phase 2 — dev/prod compose | complete |
| GEN-003 | GitHub Actions CI/CD | not started |
| GEN-004 | GitHub Pages deployment | not started |
| GEN-005 | Vitest unit + component tests | not started |
| GEN-006 | Playwright E2E tests | not started |
| GEN-007 | Git branching strategy | complete |
