export function sanitisePhone(raw, dialCode) {
  let digits = raw.replace(/[^0-9]/g, '')

  // strip leading trunk zero
  if (digits.startsWith('0')) digits = digits.slice(1)

  // strip duplicate dial code prefix if user pasted full number
  if (dialCode && digits.startsWith(dialCode)) {
    digits = digits.slice(dialCode.length)
  }

  return digits
}

export function hasLetters(value) {
  return /[a-zA-Z]/.test(value)
}
