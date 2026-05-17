## Description
Country selector and phone input on the same horizontal row. Selector (flag + dial code only) anchors the left side; phone input fills remaining width.

## Context
Stacked layout wasted vertical space. Inline row is more compact and matches standard phone input patterns. Depends on FEAT-001-country-dropdown.md and FEAT-002-phone-input-sanitiser.md.

## Details
- [x] Country selector and phone input on the same horizontal row
- [x] Country selector shows flag + dial code only (full searchable list still opens on click)
- [x] Phone input fills remaining row width
- [x] Both inputs share a visually connected border (grouped input style)
- [x] Error state (red border) applies correctly to phone input segment
- [x] Works in both dark and light mode (depends on FEAT-006-dark-light-mode.md)
- [x] Layout holds at mobile (375px) and desktop widths (depends on FEAT-007-responsive-mobile-ux.md)

## Status
complete
