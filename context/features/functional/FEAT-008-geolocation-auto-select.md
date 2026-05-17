## Description
On page load, detects the user's country via IP geolocation and auto-selects the matching entry in FEAT-001-country-dropdown.md. Silent fallback to no selection if detection fails.

## Context
Saves the user from manually picking their country in the common case. Fully client-side — works on GitHub Pages with no server required.

## Details
- [x] On load, country dropdown is pre-selected to the user's country
- [x] If geolocation fails, dropdown defaults to no selection (user picks manually)
- [x] Works on GitHub Pages (client-side only, HTTPS, no server required)
- [ ] Geolocation verified on live HTTPS Pages URL (pending)

## Status
complete

## Updates

### 2026-05-16
ADR-001: `ipapi.co` confirmed as geolocation provider. Browser `navigator.geolocation` dropped — requires permission prompt and second reverse-geocoding call. `ip-api.com` ruled out (HTTP-only free tier, mixed content blocked on Pages HTTPS). Fallback: `ipapi.co` → no selection.

### 2026-05-17
`src/composables/useGeolocation.js` — `detectCountry()` fetches `ipapi.co/json/`, extracts `country_code`, finds matching entry in bundled countries list. Returns `null` on error (silent fallback). `App.vue` `onMounted` calls `detectCountry()`, sets `selectedCountry.value` if match found.
