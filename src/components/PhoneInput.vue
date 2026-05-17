<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
  error: { type: String, default: '' },
  inline: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div :class="inline ? 'flex-1 min-w-0' : ''">
    <label v-if="!inline" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Phone number
    </label>
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @focus="$event.target.scrollIntoView({ behavior: 'smooth', block: 'center' })"
      type="tel"
      :placeholder="inline ? '0123456789' : 'e.g. 0123456789 or +60 12-345 6789'"
      :class="[
        'w-full px-3 py-2.5 border text-sm focus:outline-none focus:ring-2 focus:z-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 transition-colors',
        inline ? 'rounded-r-lg rounded-l-none' : 'rounded-lg',
        error
          ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
          : 'border-gray-300 dark:border-gray-600 focus:ring-green-500'
      ]"
    />
    <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>
