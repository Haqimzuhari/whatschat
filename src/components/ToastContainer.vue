<script setup>
defineProps({
  toasts: { type: Array, default: () => [] },
})
const emit = defineEmits(['dismiss'])
</script>

<template>
  <div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 w-full max-w-sm px-4 pointer-events-none">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="pointer-events-auto w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm shadow-lg"
    >
      <span>{{ toast.message }}</span>
      <button
        type="button"
        @click="emit('dismiss', toast.id)"
        class="flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-900 transition-colors"
        aria-label="Dismiss"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
