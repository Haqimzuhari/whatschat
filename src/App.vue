<script setup>
import { ref, computed } from 'vue'
import CountryDropdown from './components/CountryDropdown.vue'
import PhoneInput from './components/PhoneInput.vue'
import { hasLetters } from './utils/phoneUtils.js'

const selectedCountry = ref(null)
const rawPhone = ref('')

const phoneError = computed(() => {
  if (hasLetters(rawPhone.value)) return 'Phone number must contain digits only'
  return ''
})
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
      </div>
    </div>
  </div>
</template>
