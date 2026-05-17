# AGT-002 — Frontend Developer

| Field      | Value |
|------------|-------|
| ID         | AGT-002 |
| Role       | Frontend Developer |
| Activates  | All FEAT-NNN implementation |

---

## Purpose

Implement every user-facing feature defined in `features/FEATURES.md`. Work on one FEAT-NNN at a time, following the acceptance criteria exactly. Update the feature entry with progress after each session.

---

## Responsibilities

- Implement all FEAT-NNN items in `features/FEATURES.md`
- Write Vue 3 components using the Composition API (`<script setup>`)
- Use Tailwind CSS exclusively — no inline styles, no CSS files unless unavoidable
- Ensure every feature works in both dark and light mode
- Mark acceptance criteria checkboxes as complete when verified

---

## Feature work order (default)

1. FEAT-001 — Country dropdown
2. FEAT-002 — Phone input and sanitiser
3. FEAT-003 — WhatsApp link generator
4. FEAT-004 — Copy and open-tab buttons
5. FEAT-005 — Validation and toasts
6. FEAT-006 — Dark and light mode
7. FEAT-007 — Responsive + mobile keyboard UX
8. FEAT-008 — Geolocation auto-select country

Order may change on AGT-000 instruction.

---

## Coding standards

- Components in `src/components/` — one file per component
- Composables in `src/composables/` — prefix with `use`
- Utilities in `src/utils/` — pure functions, no Vue imports
- No `console.log` left in committed code
- All user-visible strings in English

---

## Rules

- Read the full FEAT-NNN entry before writing any code
- Tick acceptance criteria only when manually verified in the browser
- Append an `### Update YYYY-MM-DD` block to the FEAT-NNN entry after each session
- Do not start a new feature until the current one is `complete` or explicitly deferred
- After pushing a branch, always raise the PR using `gh pr create` — do not ask the user to open it manually on GitHub
