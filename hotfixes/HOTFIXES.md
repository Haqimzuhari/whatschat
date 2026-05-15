# Hotfixes log

> **Purpose:** Track every hotfix applied to the project — whether it targets a specific feature or a general/infrastructure concern.
>
> **ID format:** `HF-NNN` (three-digit zero-padded). Reference these IDs in commit messages, PR titles, and PROGRESS.md.
>
> **Rule:** Never delete or overwrite an entry. If a hotfix itself needs correcting, open a new `HF-NNN` and reference the original.

---

## How to add a hotfix

1. Copy the template below.
2. Assign the next available `HF-NNN` id.
3. Fill in all fields.
4. Paste at the **bottom** of this file.
5. Add a git commit with message: `hotfix(HF-NNN): short description`

---

## Severity levels

| Level | Meaning |
|-------|---------|
| `critical` | App is broken or data is wrong — fix immediately |
| `high` | Major feature is impaired — fix in current session |
| `medium` | Feature works but UX is degraded — fix in next session |
| `low` | Minor cosmetic or non-blocking issue |

---

## Hotfix template

```
---

## HF-NNN — Short description

| Field      | Value |
|------------|-------|
| ID         | HF-NNN |
| Severity   | critical / high / medium / low |
| Type       | feature / general |
| Targets    | FEAT-NNN or GEN-NNN |
| Status     | open / in-progress / resolved |
| Branch     | hotfix/HF-NNN-short-slug |
| Reported   | YYYY-MM-DD |
| Resolved   | YYYY-MM-DD |
| Commit     | (sha or PR link) |

### Problem

Describe the bug, what triggers it, and what the wrong behaviour is.

### Root cause

What caused the issue.

### Fix applied

What was changed to resolve it.

### Regression risk

Any areas that could be affected by the fix and should be re-tested.
```

---

<!-- Hotfixes will be added here as they occur -->
<!-- Example entry for reference (commented out):

---

## HF-001 — Phone sanitiser strips valid Malaysian trunk 0

| Field      | Value |
|------------|-------|
| ID         | HF-001 |
| Severity   | high |
| Type       | feature |
| Targets    | FEAT-002 |
| Status     | resolved |
| Branch     | hotfix/HF-001-trunk-zero |
| Reported   | 2024-02-10 |
| Resolved   | 2024-02-10 |
| Commit     | abc1234 |

### Problem

Numbers starting with `01x` were being stripped of both the trunk `0` AND the first digit of the subscriber number when Malaysia was selected, producing a 9-digit number instead of 10.

### Root cause

The regex was stripping all leading zeros unconditionally before the dial-code duplicate check.

### Fix applied

Moved the trunk-zero strip to after the duplicate dial-code check so only the trunk prefix is removed, not the first subscriber digit.

### Regression risk

All phone sanitiser unit tests should be re-run. Check FEAT-003 link output for MY, SG, ID numbers.

-->
