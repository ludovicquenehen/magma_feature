import { ref, watch } from 'vue'
import { useMousePressed, usePointer } from '@vueuse/core'

export function useTableScroll() {
  const { pressed } = useMousePressed()
  const { x } = usePointer()
  const lastPosition = ref(0)
  const delta = ref(0)

  watch(() => pressed.value, () => {
    lastPosition.value = x.value
  })

  watch(() => x.value, v => {
    if (!pressed.value) return
    delta.value = lastPosition.value - v
    lastPosition.value = v
  })

  return { delta }
}