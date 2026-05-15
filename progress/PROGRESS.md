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
Branch       : master
Last commit  : (none — project not yet initialised)
Docker status: not set up
App status   : not started
Blocking item: none
```

---

## Current session

```
Date         : YYYY-MM-DD
Agent/person : 
Goal         : 
In-flight    : 
Blocked by   : 
Next step    : 
```

---

## Session history

<!-- Oldest at the bottom, newest at the top -->

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
| Docker scaffold (Phase 1) | — | not started | node:20-alpine, vue project init |
| Docker dev environment (Phase 2) | — | not started | hot-reload, compose up |
| Vue app skeleton | — | not started | Vite + Tailwind + Inter |
| Country dropdown | — | not started | FEAT-001 |
| Phone input + sanitiser | — | not started | FEAT-002 |
| Link generator | — | not started | FEAT-003 |
| Copy + open tab buttons | — | not started | FEAT-004 |
| Validation + toasts | — | not started | FEAT-005 |
| Dark/light mode | — | not started | FEAT-006 |
| Responsive + mobile keyboard fix | — | not started | FEAT-007 |
| Geolocation auto-select | — | not started | FEAT-008 |
| Unit + component tests | — | not started | GEN-001 |
| E2E tests | — | not started | GEN-002 |
| CI/CD pipeline | — | not started | GEN-003 |
| GitHub Pages deploy | — | not started | GEN-004 |
