<script setup>
import { ref, computed } from 'vue'
import CountryDropdown from './components/CountryDropdown.vue'
import PhoneInput from './components/PhoneInput.vue'
import { sanitisePhone, hasLetters } from './utils/phoneUtils.js'
import { buildLink } from './utils/linkUtils.js'

const selectedCountry = ref(null)
const rawPhone = ref('')
const generatedLink = ref('')
const copyLabel = ref('Copy link')

const phoneError = computed(() => {
  if (hasLetters(rawPhone.value)) return 'Phone number must contain digits only'
  return ''
})

function generate() {
  const clean = sanitisePhone(rawPhone.value, selectedCountry.value?.dialCode)
  generatedLink.value = buildLink(selectedCountry.value?.dialCode, clean)
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
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">WhatsChat</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Generate a WhatsApp link instantly</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
        <CountryDropdown v-model="selectedCountry" />
        <PhoneInput v-model="rawPhone" :error="phoneError" />

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
  </div>
</template>
