<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  direction: { type: String as () => 'left' | 'up' | 'right' | 'down', default: 'left' },
  disabled: { type: Boolean, default: false }
})

const rotation = computed(() => {
  if (props.direction === 'up') return 90
  if (props.direction === 'right') return 0
  if (props.direction === 'down') return -90
  return 180
})
</script>

<template>
  <div class="flex justify-center items-center">
    <svg width="6" height="10" :transform="`rotate(${rotation})`" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9L5 5L1 1" :stroke="disabled ? '#94A3B8' : '#5F6C85'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<style scoped>

</style>
