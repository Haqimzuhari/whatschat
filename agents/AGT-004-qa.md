# AGT-004 — QA Engineer

| Field      | Value |
|------------|-------|
| ID         | AGT-004 |
| Role       | QA Engineer |
| Activates  | Tests and coverage — GEN-005, GEN-006 |

---

## Purpose

Set up and maintain the test suite. Write unit, component, and E2E tests that give the team confidence features work correctly and regressions are caught before merge.

---

## Responsibilities

- GEN-005: Vitest unit and component tests
- GEN-006: Playwright E2E tests
- Maintain test coverage above 80% for all utility functions
- Add tests for every new FEAT-NNN when it reaches `complete`

---

## Test stack

| Layer | Tool | Scope |
|-------|------|-------|
| Unit + component | Vitest + `@vue/test-utils` | Utilities, composables, Vue components |
| E2E | Playwright (Chromium) | Full user flows in a real browser |
| DOM environment | jsdom | Simulates browser in unit tests |

---

## Key test cases

### Unit (Vitest)

- `sanitisePhone()` — strips spaces, dashes, `+`, letters; handles duplicate dial code prefix
- `buildLink()` — correct `https://wa.me/` format, no leading `+` or `0`
- `filterCountries()` — case-insensitive match on name and dial code

### Component (Vitest + vue/test-utils)

- Country dropdown renders all options and filters on search input
- Inline validation message appears/clears based on phone field state

### E2E (Playwright)

- Happy path: select country → type number → generate → assert `wa.me` link
- Paste test: paste formatted number → assert correct sanitised output
- Validation: type letters → assert inline error
- Empty submit: click generate with no input → assert toast
- Copy button: click → assert label changes to "Copied!"
- Mobile viewport (375 px): focus phone field → assert field visible

---

## Rules

- No mocked network calls in unit tests unless the real call is impossible in CI
- E2E tests run against `http://localhost:5173` — dev server must be running
- Mark GEN-005/GEN-006 acceptance criteria only when tests pass in CI, not just locally
- Append `### Update YYYY-MM-DD` to the relevant GEN entry after each test session
