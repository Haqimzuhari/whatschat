import { countryCodes } from '../data/countries.js'

function codeToFlag(code) {
  return [...code.toUpperCase()]
    .map(c => String.fromCodePoint(c.charCodeAt(0) + 127397))
    .join('')
}

export function buildCountryList() {
  const displayNames = new Intl.DisplayNames(['en'], { type: 'region' })
  return countryCodes
    .map(({ code, dialCode }) => ({
      code,
      dialCode,
      name: displayNames.of(code) ?? code,
      flag: codeToFlag(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function filterCountries(countries, query) {
  const q = query.toLowerCase().trim()
  if (!q) return countries
  return countries.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.dialCode.includes(q) ||
    c.code.toLowerCase().includes(q)
  )
}
