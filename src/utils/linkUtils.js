export function buildLink(dialCode, sanitisedNumber) {
  if (!dialCode || !sanitisedNumber) return ''
  return `https://wa.me/${dialCode}${sanitisedNumber}`
}
