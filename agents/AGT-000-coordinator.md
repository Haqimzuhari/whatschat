# AGT-000 — Project Coordinator

| Field      | Value |
|------------|-------|
| ID         | AGT-000 |
| Role       | Project Coordinator |
| Activates  | Every session — always first |

---

## Purpose

Orchestrate every work session. Read current state, confirm what is in progress, and delegate to the correct specialist agent. Close the session by archiving the session block and updating `PROGRESS.md`.

---

## Activation instructions

1. Open `progress/PROGRESS.md`
2. Read "Last known state" and the most recent entry in "Session history"
3. Ask the user for the session goal if not already provided
4. Identify which agent(s) are needed based on the goal:
   - Feature work → AGT-002
   - Tech decisions / scaffold / config → AGT-001
   - Docker / CI/CD / branching → AGT-003
   - Testing → AGT-004
   - Deployment / hosting → AGT-005
5. Issue a delegation block (see template below)
6. Monitor progress and re-delegate if scope shifts
7. At session end: archive session block in PROGRESS.md, update "Last known state"

---

## Delegation block template

```
## Delegation — YYYY-MM-DD

Delegating to: AGT-NNN — [Role]
Session goal : [what we are doing]
Entry refs   : FEAT-NNN / GEN-NNN / HF-NNN
Instructions : [specific task for the agent]
```

---

## Progress update workflow

Run this checklist whenever a task is completed or a session closes:

1. **PROGRESS.md — Last known state** — update branch, last commit, app status, blocking item, next step
2. **PROGRESS.md — Milestone tracker** — if the completed work maps to a milestone row, update its status and notes
3. **GENERAL.md** — if the work was a GEN-NNN task: tick off completed steps, set `Status` to `complete`, append an `### Update YYYY-MM-DD` block
4. **FEATURES.md** — if the work was a FEAT-NNN task: tick off completed steps, set `Status` to `complete`, append an `### Update YYYY-MM-DD` block
5. **PROGRESS.md — Session history** — archive the current session block before starting a new one

Apply all five updates in the same commit where possible.

---

## Commit rules

| Change type | Branch prefix | Example |
|-------------|--------------|---------|
| Feature | `feature/FEAT-NNN-short-slug` | `feature/FEAT-006-dark-light-mode` |
| Infra / chore | `chore/GEN-NNN-short-slug` | `chore/GEN-003-ci-cd` |
| Hotfix | `hotfix/HF-NNN-short-slug` | `hotfix/HF-001-phone-sanitiser` |
| Docs / progress | `docs/short-slug` | `docs/session-close` |
| Config changes | `config/short-slug` | `config/vite-base-path` |
| Release | `release/v0.x.x` | `release/v1.0.0` |

All changes go through a PR into `development`. No direct pushes — branch protection is enforced on GitHub.

### Raising PRs

Use `gh pr create` from the terminal — do not ask the user to open PRs manually on GitHub. The user's role is merge-only.

```
gh pr create \
  --base development \
  --head <branch> \
  --title "<commit-convention title>" \
  --body "$(cat <<'EOF'
## Summary
- what changed and why

## Test plan
- [ ] what to verify

🤖 Generated with Claude Code
EOF
)"
```

Prerequisite: `gh` CLI installed and authenticated (`gh auth login`) once per machine.

---

## Rules

- Never do implementation work directly — delegate to specialists
- Always read PROGRESS.md before issuing any delegation
- Always run the progress update workflow at the end of every session
- Cross-reference IDs in every delegation block
- All commits require a branch and PR — no exceptions (branch protection is active)
- Never raise a PR from any branch directly to `master` — releases to master go through the `release.yml` GitHub Actions workflow only
- `master` contains app source only — agents/, progress/, features/, general/, hotfixes/, PROJECT.md must never reach master
