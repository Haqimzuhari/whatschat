# Project docs

Central knowledge base for the WhatsApp Link Generator project. Every decision, task, session, and fix is tracked here. **Append, never overwrite.**

---

## Folder structure

```
project-docs/
│
├── README.md                        ← this file — start here
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

| Branch | Purpose |
|--------|---------|
| `master` | Stable — auto-deploys to GitHub Pages. Protected: PR + passing CI required. |
| `development` | Active development — all feature branches merge here first. |

**Branch naming:**

| Type | Pattern |
|------|---------|
| Feature | `feature/FEAT-NNN-short-slug` |
| Hotfix | `hotfix/HF-NNN-short-slug` |
| Infra / chore | `chore/GEN-NNN-short-slug` |
| Release | `release/v0.x.x` |

**Flow:** `feature/*` → `development` → PR → `master` → auto-deploy to Pages.
Hotfixes branch off `master` and merge back to both `master` and `development`.

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
| GEN-001 | Docker Phase 1 — scaffold | planned |
| GEN-002 | Docker Phase 2 — dev/prod compose | planned |
| GEN-003 | GitHub Actions CI/CD | planned |
| GEN-004 | GitHub Pages deployment | planned |
| GEN-005 | Vitest unit + component tests | planned |
| GEN-006 | Playwright E2E tests | planned |
| GEN-007 | Git branching strategy | planned |
