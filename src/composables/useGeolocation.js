import { buildCountryList } from '../utils/countryUtils.js'

export async function detectCountry() {
  try {
    const res = await fetch('https://ipapi.co/json/')
    if (!res.ok) return null
    const data = await res.json()
    if (!data.country_code) return null
    const countries = buildCountryList()
    return countries.find(c => c.code === data.country_code) || null
  } catch {
    return null
  }
}
