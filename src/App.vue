<script setup>
import { ref, computed, onMounted } from 'vue'
import CountryDropdown from './components/CountryDropdown.vue'
import PhoneInput from './components/PhoneInput.vue'
import ToastContainer from './components/ToastContainer.vue'
import { sanitisePhone, hasLetters } from './utils/phoneUtils.js'
import { buildLink } from './utils/linkUtils.js'
import { useToast } from './composables/useToast.js'
import { useDarkMode } from './composables/useDarkMode.js'
import { detectCountry } from './composables/useGeolocation.js'

const selectedCountry = ref(null)
const rawPhone = ref('')
const generatedLink = ref('')
const copyLabel = ref('Copy link')

const { toasts, addToast, dismissToast } = useToast()
const { isDark, toggle: toggleDark } = useDarkMode()

onMounted(async () => {
  const country = await detectCountry()
  if (country) selectedCountry.value = country
})

const phoneError = computed(() => {
  if (hasLetters(rawPhone.value)) return 'Phone number must contain digits only'
  return ''
})

function generate() {
  if (!selectedCountry.value) {
    addToast('Please select a country first')
    return
  }
  if (!rawPhone.value.trim()) {
    addToast('Please enter a phone number')
    return
  }
  if (phoneError.value) {
    addToast('Fix the phone number before generating')
    return
  }
  const clean = sanitisePhone(rawPhone.value, selectedCountry.value.dialCode)
  if (!clean) {
    addToast('Phone number is too short — please check and try again')
    return
  }
  generatedLink.value = buildLink(selectedCountry.value.dialCode, clean)
  copyLabel.value = 'Copy link'
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(generatedLink.value)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = generatedLink.value
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copyLabel.value = 'Copied!'
  setTimeout(() => { copyLabel.value = 'Copy link' }, 2000)
}

function openLink() {
  window.open(generatedLink.value, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
    <button
      type="button"
      @click="toggleDark"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      class="fixed top-4 right-4 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14A7 7 0 0012 5z" />
      </svg>
      <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </button>

    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">WhatsChat</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Generate a WhatsApp link instantly</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone number</label>
          <div class="flex">
            <CountryDropdown v-model="selectedCountry" inline />
            <PhoneInput v-model="rawPhone" :error="phoneError" inline />
          </div>
        </div>

        <button
          type="button"
          @click="generate"
          class="w-full py-2.5 px-4 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Generate link
        </button>

        <div v-if="generatedLink" class="space-y-3">
          <div class="rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 p-3">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Generated link</p>
            <p class="text-sm font-mono text-gray-900 dark:text-white break-all">{{ generatedLink }}</p>
          </div>
          <div class="flex gap-2">
            <button
              type="button"
              @click="copyLink"
              class="flex-1 py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {{ copyLabel }}
            </button>
            <button
              type="button"
              @click="openLink"
              class="flex-1 py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Start chatting
            </button>
          </div>
        </div>
      </div>
    </div>

    <ToastContainer :toasts="toasts" @dismiss="dismissToast" />
  </div>
</template>
