# Features registry

> **Purpose:** Single source of truth for every feature. Append-only — never delete or overwrite an entry. To update a feature, add a new `## Update` block under it with today's date.
>
> **ID format:** `FEAT-NNN` (three-digit zero-padded). Reference these IDs in PROGRESS.md, HOTFIXES.md, and any commit messages.

---

## How to add a feature

1. Copy the template below.
2. Assign the next available `FEAT-NNN` id.
3. Fill in the fields and paste it at the **bottom** of this file (newest last).
4. To update an existing feature, find its section and append an `### Update YYYY-MM-DD` block — do not edit the original fields.

---

## Feature template

```
---

## FEAT-NNN — Feature name

| Field      | Value |
|------------|-------|
| ID         | FEAT-NNN |
| Title      | |
| Status     | planned / in-progress / complete / deferred / cancelled |
| Branch     | feature/FEAT-NNN-short-slug |
| Agent      | |
| Created    | YYYY-MM-DD |
| Updated    | YYYY-MM-DD |
| Depends on | — |
| Related    | — |

### Description

What this feature does and why it is needed.

### Acceptance criteria

- [ ] Criterion 1
- [ ] Criterion 2

### Implementation notes

Technical notes, chosen libraries, edge cases to handle.

### Update YYYY-MM-DD

What changed and why.
```

---

## FEAT-001 — Country dropdown with search

| Field      | Value |
|------------|-------|
| ID         | FEAT-001 |
| Title      | Country dropdown with search |
| Status     | in-progress |
| Branch     | feature/FEAT-001-country-dropdown |
| Agent      | AGT-002 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2026-05-16 |
| Depends on | — |
| Related    | FEAT-002, FEAT-008 |

### Description

A searchable dropdown that lists all countries with their dial codes. Auto-selects the user's country on page load via geolocation. Powers the dial-code prefix used when building the WhatsApp link.

### Acceptance criteria

- [x] Dropdown lists all countries with flag emoji, country name, and dial code
- [x] User can type to filter the list (case-insensitive, matches name and dial code)
- [ ] On page load, country is auto-selected based on user location (FEAT-008)
- [x] Accessible via keyboard (arrow keys, enter, escape)
- [ ] Dark and light mode both render correctly — pending FEAT-006

### Implementation notes

Use the browser `Intl.DisplayNames` API to generate country names. Store dial code data as a static JSON array bundled with the app (no external API call at runtime). Dropdown built as a Vue component with `<input>` for search and a `<ul>` for results.

### Update 2026-05-16

ADR-001 confirms: country + dial code data must be bundled as a static JSON file — no external API call. Chosen approach is safe on GitHub Pages with zero CORS risk. AGT-002 to source or author the static dataset before implementing the dropdown component.

### Update 2026-05-16 (implemented)

Implemented in `feature/FEAT-001-country-dropdown`. Files: `src/data/countries.js` (195 entries), `src/utils/countryUtils.js` (buildCountryList, filterCountries), `src/components/CountryDropdown.vue`. Country names via `Intl.DisplayNames`, flags via regional indicator codepoints. Search filters by name, dial code, ISO code. Keyboard nav: arrows, enter, escape. Click-outside closes. Dark + light mode. PR open — pending merge into development.

---

## FEAT-002 — Phone number input and sanitiser

| Field      | Value |
|------------|-------|
| ID         | FEAT-002 |
| Title      | Phone number input and sanitiser |
| Status     | in-progress |
| Branch     | feature/FEAT-002-phone-input |
| Agent      | AGT-002 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2026-05-16 |
| Depends on | FEAT-001 |
| Related    | FEAT-003, FEAT-005 |

### Description

A text input that accepts any phone number format a user might paste or type — with country code or without, with dashes, spaces, parentheses, or plus signs. Sanitises the value to pure digits for use in link generation.

### Acceptance criteria

- [x] Accepts paste of numbers like `+60 12-345 6789`, `0123456789`, `(012) 345-6789`
- [x] Strips all non-digit characters after input
- [x] Strips leading country code if it duplicates the selected country's dial code
- [x] Rejects any input that contains letters
- [x] Shows inline validation error above field when rules are violated (FEAT-005)
- [x] Output is digits-only, ready for concatenation with dial code

### Implementation notes

Use a `@input` handler that runs a regex replace `/[^0-9]/g` to strip non-digits. Then strip leading `0` (trunk prefix) before concatenating with the dial code. Edge case: if the pasted number starts with the dial code (e.g. user pastes `60123456789` with Malaysia selected), detect and strip the duplicate prefix.

### Update 2026-05-16 (implemented)

Implemented in `feature/FEAT-002-phone-input` (stacked on FEAT-001). Files: `src/utils/phoneUtils.js` (sanitisePhone, hasLetters), `src/components/PhoneInput.vue`. Live inline error on letter detection; red border via computed phoneError. PR open — pending merge.

---

## FEAT-003 — WhatsApp link generator

| Field      | Value |
|------------|-------|
| ID         | FEAT-003 |
| Title      | WhatsApp link generator |
| Status     | in-progress |
| Branch     | feature/FEAT-003-link-generator |
| Agent      | AGT-002 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2026-05-16 |
| Depends on | FEAT-001, FEAT-002 |
| Related    | FEAT-004, FEAT-005 |

### Description

Core business logic. Takes the selected dial code and sanitised phone number, assembles a `https://wa.me/{dialcode}{number}` URL, and displays it to the user.

### Acceptance criteria

- [x] Generated link follows format `https://wa.me/[country-code][number]`
- [x] No leading `+` or `0` in the final number
- [x] Link is displayed in a read-only label/field below the generate button
- [x] Empty or invalid input blocks generation and shows a toast (FEAT-005)

### Implementation notes

Link format: `https://wa.me/60123456789` — no `+`, no spaces, no dashes. The `wa.me` format is WhatsApp's official deep link; it opens the app on mobile and web.whatsapp.com on desktop.

### Update 2026-05-16 (implemented)

Implemented in `feature/FEAT-003-link-generator` (stacked on FEAT-002). Files: `src/utils/linkUtils.js` (buildLink). Generate button in App.vue calls sanitisePhone then buildLink. Result shown in read-only monospace block. PR open — pending merge.

---

## FEAT-004 — Copy and open-tab buttons

| Field      | Value |
|------------|-------|
| ID         | FEAT-004 |
| Title      | Copy link and open-in-new-tab buttons |
| Status     | in-progress |
| Branch     | feature/FEAT-004-copy-open |
| Agent      | AGT-002 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2026-05-16 |
| Depends on | FEAT-003 |
| Related    | — |

### Description

Two action buttons that appear after a link is generated: one copies the link to clipboard, one opens the link in a new browser tab (triggering WhatsApp to open on mobile).

### Acceptance criteria

- [x] "Copy link" button copies the generated URL to clipboard using `navigator.clipboard.writeText`
- [x] Button label changes to "Copied!" for 2 seconds after a successful copy, then reverts
- [x] "Start chatting" button opens the link in a new tab (`window.open(url, '_blank')`)
- [x] Both buttons are hidden/disabled until a valid link has been generated

### Implementation notes

`navigator.clipboard` requires HTTPS or localhost — GitHub Pages satisfies this. For older browser fallback, use `document.execCommand('copy')` on a hidden textarea.

### Update 2026-05-16 (implemented)

Implemented in `feature/FEAT-004-copy-open` (stacked on FEAT-003). Copy uses navigator.clipboard with textarea execCommand fallback. Label reverts after 2s. Start chatting uses window.open with noopener. Both hidden until link generated. PR open — pending merge.

---

## FEAT-005 — Validation and toast notifications

| Field      | Value |
|------------|-------|
| ID         | FEAT-005 |
| Title      | Inline validation and toast notifications |
| Status     | in-progress |
| Branch     | feature/FEAT-005-validation-toasts |
| Agent      | AGT-002 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2026-05-16 |
| Depends on | FEAT-001, FEAT-002 |
| Related    | FEAT-003 |

### Description

Two-tier error feedback. Inline validation shows a red hint message directly above the offending field in real time. Submit-time validation shows a compact toast notification that auto-dismisses after 5 seconds.

### Acceptance criteria

- [x] Inline error appears above the phone field if letters are detected on input
- [x] Inline error clears as soon as the field becomes valid
- [x] Toast appears at top of screen on failed generate attempt
- [x] Toast message is human-readable and concise (max ~60 characters)
- [x] Toast auto-dismisses after 5 seconds
- [x] Toast can be manually dismissed before the timeout
- [x] Multiple toasts stack without overlapping

### Implementation notes

Inline errors use a `<p>` with `text-red-500 text-xs` rendered above each `<input>` — controlled by a reactive error string per field. Toast managed by a simple `ref([])` queue in a composable; each toast has an `id`, `message`, and a `setTimeout` cleanup.

### Update 2026-05-16 (implemented)

Implemented in `feature/FEAT-005-validation-toasts` (stacked on FEAT-004). Files: `src/composables/useToast.js`, `src/components/ToastContainer.vue`. generate() guards: no country, empty phone, letter error, empty sanitised result — each shows a toast. ToastContainer fixed bottom-center, stacks multiple toasts, auto-dismisses after 5s, manual dismiss via X button. PR open — pending merge.

---

## FEAT-006 — Dark and light mode

| Field      | Value |
|------------|-------|
| ID         | FEAT-006 |
| Title      | Dark and light mode |
| Status     | planned |
| Branch     | feature/FEAT-006-dark-light-mode |
| Agent      | Agent 2 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Depends on | — |
| Related    | — |

### Description

Full dark/light mode support using Tailwind's `darkMode: 'class'` strategy, driven by the user's OS `prefers-color-scheme` setting on load, with the option to toggle manually.

### Acceptance criteria

- [ ] App respects `prefers-color-scheme: dark` on initial load
- [ ] Manual toggle persists selection in `localStorage`
- [ ] All UI elements (inputs, dropdown, buttons, toasts) render correctly in both modes
- [ ] No hardcoded colours — all use Tailwind semantic classes with `dark:` variants

---

## FEAT-007 — Responsive design and mobile keyboard UX

| Field      | Value |
|------------|-------|
| ID         | FEAT-007 |
| Title      | Responsive design and mobile keyboard UX |
| Status     | planned |
| Branch     | feature/FEAT-007-responsive-mobile |
| Agent      | Agent 2 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Depends on | — |
| Related    | — |

### Description

Ensure the app works well on small screens. Critical UX requirement: when a user taps an input field on mobile and the virtual keyboard appears, the focused field must scroll into view so the user can always see what they are typing.

### Acceptance criteria

- [ ] Layout is single-column on mobile, comfortable on tablet and desktop
- [ ] On focus, the active input calls `scrollIntoView({ behavior: 'smooth', block: 'center' })`
- [ ] No content is permanently hidden behind the virtual keyboard
- [ ] Tested at 375px, 768px, and 1280px viewports

---

## FEAT-008 — Geolocation auto-select country

| Field      | Value |
|------------|-------|
| ID         | FEAT-008 |
| Title      | Geolocation auto-select country |
| Status     | planned |
| Branch     | feature/FEAT-008-geolocation |
| Agent      | Agent 2 — Frontend Developer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Depends on | FEAT-001 |
| Related    | — |

### Description

On page load, detect the user's country and auto-select the matching entry in the country dropdown. Primary method: browser `navigator.geolocation` + reverse-geocode via a free API. Fallback: `ipapi.co` IP geolocation (no key required on free tier).

### Acceptance criteria

- [ ] On load, the country dropdown is pre-selected to the user's country
- [ ] If geolocation is denied or fails, fallback to IP geolocation silently
- [ ] If both methods fail, dropdown defaults to no selection (user picks manually)
- [ ] Works on GitHub Pages (no server required — all client-side)

### Implementation notes

Strategy: call `ipapi.co/json/` (HTTPS, CORS-open, free, no key for low volume) on load to get country code. Map the ISO 3166-1 alpha-2 code to the dial code list. The browser geolocation API requires user permission and is slower, so IP lookup is the primary path — it's good enough for this use case.

### Update 2026-05-16

ADR-001 confirms: `ipapi.co` is the approved geolocation provider. Browser `navigator.geolocation` is dropped as primary path — adds permission prompt and requires a second reverse-geocoding API call. `ip-api.com` ruled out (HTTP-only free tier, blocked as mixed content on GitHub Pages HTTPS). Fallback chain: `ipapi.co` → no selection (user picks manually).

---

## FEAT-009 — Inline phone row layout

| Field      | Value |
|------------|-------|
| ID         | FEAT-009 |
| Title      | Inline phone row layout |
| Status     | in-progress |
| Branch     | feature/FEAT-009-inline-phone-row |
| Agent      | AGT-002 — Frontend Developer |
| Created    | 2026-05-17 |
| Updated    | 2026-05-17 |
| Depends on | FEAT-001, FEAT-002 |
| Related    | FEAT-007 |

### Description

Redesign the input area so the country code selector and phone number field sit on the same row. The country selector (compact — flag + dial code only) anchors the left side; the phone input fills the remaining width. Removes wasted vertical space from the stacked layout.

### Acceptance criteria

- [ ] Country selector and phone input are on the same horizontal row
- [ ] Country selector trigger shows flag + dial code only (no country name) — full searchable list still opens on click
- [ ] Phone input fills remaining row width
- [ ] Both inputs share a visually connected border (pill/grouped input style)
- [ ] Error state (red border) applies correctly to the phone input segment
- [ ] Works in both dark and light mode
- [ ] Layout holds at mobile (375px) and desktop widths
