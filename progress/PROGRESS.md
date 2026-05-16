# Project progress

> **Purpose:** Track where we left off so any session can resume without losing context.
> Update the "Current session" block at the start of every work session and move it to history when done.

---

## How to use this file

1. At the start of a session, read "Last known state" to orient yourself.
2. Update "Current session" with today's date, what you are doing, and which features/tickets are in flight.
3. At the end of a session, cut the current session block and paste it under "Session history" before starting a new one.
4. Keep "Last known state" always reflecting the true current state of the project.

---

## Last known state

```
Branch       : development (chore/GEN-002-docker-dev open as PR — not yet merged)
Last commit  : a1328a9 — docker-compose.yml + docker-compose.prod.yml added
Docker status: dev compose done (port 5173, hot-reload, verified HTTP 200); prod compose done (dist/ verified)
App status   : running — docker compose up serves app on localhost:5173
Blocking item: none
Docs status  : complete
GitHub repo  : git@github.com:Haqimzuhari/whatschat.git
Next step    : merge PR chore/GEN-002-docker-dev → development, then start FEAT-001 or GEN-003
```

---

## Current session

```
Date         : —
Agent/person : —
Goal         : —
In-flight    : —
Blocked by   : —
Next step    : —
```

---

## Session history

<!-- Oldest at the bottom, newest at the top -->

### 2026-05-16 (session 2)

| Field        | Value |
|--------------|-------|
| Agent/person | AGT-000 → AGT-003 |
| Branch       | chore/GEN-002-docker-dev (PR open, not yet merged) |
| Goal         | GEN-002 — Docker dev and prod compose files |
| Completed    | docker-compose.yml (dev, hot-reload, port 5173), docker-compose.prod.yml (build, dist/ output), GENERAL.md GEN-002 marked complete |
| Left off at  | PR open: chore/GEN-002-docker-dev → development. Dev server verified HTTP 200 on localhost:5173. Prod build produces dist/index.html. |
| Next step    | Merge PR on GitHub, pull development, then FEAT-001 (country dropdown) or GEN-003 (CI/CD) |
| Related      | GEN-002, GEN-001 |

---

### 2026-05-16

| Field        | Value |
|--------------|-------|
| Agent/person | AGT-000 → AGT-003 + AGT-001 |
| Branch       | development (via chore/GEN-007-pr-workflow, chore/GEN-001-docker-scaffold) |
| Goal         | Bootstrap project — docs structure, branching strategy, Vue scaffold |
| Completed    | Docs folder structure, GEN-007 (branching + PR workflow), GEN-001 (Vue 3 + Vite + Tailwind v3 + Inter scaffold) |
| Left off at  | development is clean and up to date. Dev compose not yet written. App not yet running. |
| Next step    | GEN-002 — write docker-compose.yml (dev, hot-reload, port 5173), confirm app runs |
| Related      | GEN-007, GEN-001, GEN-002 |

**Notes:** GitHub repo was accidentally deleted mid-session when exploring branch protection (org move gone wrong). Repo recreated at same URL, all branches restored via local push. Branch protection skipped — requires paid plan on private repos. Protection enforced by convention instead (documented in README and AGT-003).

---

<!--
TEMPLATE — copy this block when archiving a session:

### YYYY-MM-DD

| Field       | Value |
|-------------|-------|
| Agent/person |      |
| Branch      |       |
| Goal        |       |
| Completed   |       |
| Left off at |       |
| Next step   |       |
| Related     | FEAT-XXX / HF-XXX / GEN-XXX |

-->

---

## Milestone tracker

| Milestone | Target | Status | Notes |
|-----------|--------|--------|-------|
| Milestone | Target | Status | Notes |
|-----------|--------|--------|-------|
| Git + branching strategy | 2026-05-16 | complete | GEN-007 — PR workflow documented |
| Docker scaffold (Phase 1) | 2026-05-16 | complete | GEN-001 — Vue 3 + Vite + Tailwind + Inter |
| Docker dev environment (Phase 2) | 2026-05-16 | complete | GEN-002 — dev + prod compose verified |
| Vue app skeleton | — | unblocked | docker compose up confirmed working |
| Country dropdown | — | not started | FEAT-001 |
| Phone input + sanitiser | — | not started | FEAT-002 |
| Link generator | — | not started | FEAT-003 |
| Copy + open tab buttons | — | not started | FEAT-004 |
| Validation + toasts | — | not started | FEAT-005 |
| Dark/light mode | — | not started | FEAT-006 |
| Responsive + mobile keyboard fix | — | not started | FEAT-007 |
| Geolocation auto-select | — | not started | FEAT-008 |
| Unit + component tests | — | not started | GEN-005 |
| E2E tests | — | not started | GEN-006 |
| CI/CD pipeline | — | not started | GEN-003 |
| GitHub Pages deploy | — | not started | GEN-004 |
