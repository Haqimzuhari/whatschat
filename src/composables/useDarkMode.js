import { ref, watch } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
  }

  watch(isDark, (val) => {
    document.documentElement.classList.toggle('dark', val)
    localStorage.setItem('theme', val ? 'dark' : 'light')
  })

  return { isDark, toggle }
}
