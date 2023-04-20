<script setup lang="ts">
import { computed, ref } from 'vue';
import Chevron from './Chevron.vue';

const THREE_DOTS = '...'

const props = defineProps({
  value: { type: Number, default: 1 },
  nbPages: { type: Number, required: true },
})
const emit = defineEmits(['update:value'])

const set = (v: number) => {
  if (v <= 0 || v > props.nbPages) return
  current.value = v
  emit('update:value', v)
}

const current = ref(1)
const range = computed(() => {
  const before = current.value - 1
  const after = current.value + 1
  const range = [
    after >= props.nbPages && before - 1,
    before > 0 && before,
    current.value,
    after > 0 && after,
    before <= 0 && after + 1
  ].filter(e => !!e && e > 1 && e < props.nbPages) as number[]

  return [
    1,
    range[0] !== 2 && THREE_DOTS,
    ...range,
    range[range.length - 1] !== (props.nbPages - 1) && THREE_DOTS,
    props.nbPages
  ].filter(Boolean)
})

</script>

<template>
  <div class="flex flex-row justify-center">
    <Chevron :disabled="current === 1" class="mr-[22px]" @click="set(current - 1)" />
    <span
      v-for="p in range"
      :class="[
        'w-8 h-8 font-medium text-center rounded-full mr-[3px] pt-1 text-gray hover:cursor-pointer hover:bg-[#F1F5F9]',
        { 
          'bg-observer-light text-observer': p === current,
          'hover:bg-neutral-light hover:cursor-default': p === '...'
        }
      ]
      "
      @click="p !== THREE_DOTS ? set(p as number) : () => { }"
    >
      {{ p }}
    </span>
    <Chevron direction="right" :disabled="current === nbPages" class="ml-[22px]" @click="set(current + 1)" />
  </div>
</template>

<style scoped>
  
</style>
