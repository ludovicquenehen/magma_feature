<script setup lang="ts">
  defineProps({
    direction: { type: String as () => 'left' | 'right', default: 'left' },
    disabled: { type: Boolean, default: false }
  })
</script>

<template>
  <div class="flex justify-center items-center">
    <svg width="6" height="10" :transform="`rotate(${direction === 'right' ? 0 : 180})`" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9L5 5L1 1" :stroke="disabled ? '#94A3B8' : '#5F6C85'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<style scoped>

</style>
