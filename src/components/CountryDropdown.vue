<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { buildCountryList, filterCountries } from '../utils/countryUtils.js'

const props = defineProps({
  modelValue: { type: Object, default: null },
})
const emit = defineEmits(['update:modelValue'])

const countries = buildCountryList()
const isOpen = ref(false)
const search = ref('')
const highlightedIndex = ref(0)
const searchInput = ref(null)
const listEl = ref(null)
const rootEl = ref(null)

const filtered = computed(() => filterCountries(countries, search.value))

async function open() {
  isOpen.value = true
  highlightedIndex.value = 0
  await nextTick()
  searchInput.value?.focus()
  rootEl.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function close() {
  isOpen.value = false
  search.value = ''
  highlightedIndex.value = 0
}

function toggle() {
  isOpen.value ? close() : open()
}

function select(country) {
  emit('update:modelValue', country)
  close()
}

function scrollToHighlighted() {
  nextTick(() => {
    listEl.value?.children[highlightedIndex.value]?.scrollIntoView({ block: 'nearest' })
  })
}

function onKeydown(e) {
  if (!isOpen.value) return
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    highlightedIndex.value = Math.min(highlightedIndex.value + 1, filtered.value.length - 1)
    scrollToHighlighted()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
    scrollToHighlighted()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    if (filtered.value[highlightedIndex.value]) select(filtered.value[highlightedIndex.value])
  } else if (e.key === 'Escape') {
    close()
  }
}

function onClickOutside(e) {
  if (!rootEl.value?.contains(e.target)) close()
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside))
</script>

<template>
  <div ref="rootEl" class="relative">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Country
    </label>
    <button
      type="button"
      @click="toggle"
      class="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
    >
      <span v-if="modelValue" class="flex items-center gap-2 text-gray-900 dark:text-white">
        <span>{{ modelValue.flag }}</span>
        <span>{{ modelValue.name }}</span>
        <span class="text-gray-400">+{{ modelValue.dialCode }}</span>
      </span>
      <span v-else class="text-gray-400">Select country</span>
      <svg
        class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-150"
        :class="{ 'rotate-180': isOpen }"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg"
    >
      <div class="p-2 border-b border-gray-100 dark:border-gray-600">
        <input
          ref="searchInput"
          v-model="search"
          type="text"
          placeholder="Search country or dial code…"
          class="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          @keydown="onKeydown"
        />
      </div>
      <ul ref="listEl" class="max-h-56 overflow-y-auto py-1">
        <li v-if="filtered.length === 0" class="px-3 py-2 text-sm text-gray-400">
          No results
        </li>
        <li
          v-for="(country, i) in filtered"
          :key="country.code"
          @click="select(country)"
          @mouseenter="highlightedIndex = i"
          class="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer"
          :class="
            i === highlightedIndex
              ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600'
          "
        >
          <span>{{ country.flag }}</span>
          <span class="flex-1">{{ country.name }}</span>
          <span class="text-gray-400 dark:text-gray-500 text-xs">+{{ country.dialCode }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
