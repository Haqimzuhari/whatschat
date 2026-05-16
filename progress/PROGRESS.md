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
Branch       : development (clean, up to date with master)
Last commit  : be19c85 — PR workflow documented in README + AGT-003
Docker status: scaffold done (docker-compose.scaffold.yml); dev compose not yet written
App status   : scaffolded — Vue 3 + Vite + Tailwind v3 + Inter in place, not yet running
Blocking item: none
Docs status  : complete
GitHub repo  : git@github.com:Haqimzuhari/whatschat.git (recreated after accidental delete)
```

---

## Current session

```
Date         : 2026-05-16
Agent/person : AGT-000 → AGT-003
Goal         : GEN-002 — Docker dev and prod compose files
In-flight    : chore/GEN-002-docker-dev
Blocked by   : —
Next step    : confirm docker compose up starts dev server on port 5173
```

---

## Session history

<!-- Oldest at the bottom, newest at the top -->

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
| Docker dev environment (Phase 2) | — | not started | GEN-002 — next action |
| Vue app skeleton | — | blocked | waiting on GEN-002 |
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
