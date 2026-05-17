## Description
Single-column responsive layout with mobile keyboard UX fix — focused input fields scroll into view when the virtual keyboard appears.

## Context
Mobile users tap inputs and the virtual keyboard pushes the active field out of view. This ensures the user always sees what they are typing regardless of device.

## Details
- [x] Layout is single-column on mobile, comfortable on tablet and desktop
- [x] On focus, active input calls `scrollIntoView({ behavior: 'smooth', block: 'center' })`
- [x] No content permanently hidden behind the virtual keyboard
- [ ] Verified at 375px, 768px, and 1280px viewports (manual check pending)

## Status
complete

## Updates

### 2026-05-17
`PhoneInput.vue`: `@focus` handler calls `scrollIntoView`. `CountryDropdown.vue`: `open()` calls `rootEl.value?.scrollIntoView` after dropdown opens. Layout was already single-column via Tailwind — no structural changes needed.
