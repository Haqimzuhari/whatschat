## Description
Searchable dropdown listing all countries with flag emoji, name, and dial code. Powers the dial-code prefix used when building the WhatsApp link.

## Context
Users need to select their country to get the correct dial code before generating a wa.me link. Auto-selects on load via geolocation (FEAT-008-geolocation-auto-select.md).

## Details
- [x] Dropdown lists all countries with flag emoji, country name, and dial code
- [x] User can type to filter the list (case-insensitive, matches name and dial code)
- [x] On page load, country is auto-selected based on user location (depends on FEAT-008-geolocation-auto-select.md)
- [x] Accessible via keyboard (arrow keys, enter, escape)
- [x] Dark and light mode both render correctly (depends on FEAT-006-dark-light-mode.md)

## Status
complete

## Updates

### 2026-05-16
Country + dial code data bundled as static JSON — no external API at runtime. `Intl.DisplayNames` API for country names, flags via regional indicator codepoints. Search filters by name, dial code, ISO code. Keyboard nav: arrows, enter, escape. Click-outside closes.

Files: `src/data/countries.js` (195 entries), `src/utils/countryUtils.js` (buildCountryList, filterCountries), `src/components/CountryDropdown.vue`.
