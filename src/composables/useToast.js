import { ref } from 'vue'

const toasts = ref([])
let nextId = 0

export function useToast() {
  function addToast(message, duration = 5000) {
    const id = nextId++
    toasts.value.push({ id, message })
    setTimeout(() => dismissToast(id), duration)
  }

  function dismissToast(id) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return { toasts, addToast, dismissToast }
}
