<script setup lang="ts">
import { computed } from 'vue';
import Chevron from '../icons/Chevron.vue';

const THREE_DOTS = '...'

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  nbPages: { type: Number, required: true },
})
const emit = defineEmits(['update:modelValue'])

const set = (v: number) => {
  if (v <= 0 || v > props.nbPages) return
  value.value = v
}

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: number) {
    emit('update:modelValue', value)
  }
})

const range = computed(() => {
  const before = value.value - 1
  const after = value.value + 1
  const range = [
    after >= props.nbPages && before - 1,
    before > 0 && before,
    value.value,
    after > 0 && after,
    before <= 0 && after + 1
  ].filter(e => !!e && e > 1 && e < props.nbPages) as number[]

  return [
    1,
    !!range.length && range[0] !== 2 && THREE_DOTS,
    ...range,
    !!range.length && range[range.length - 1] !== (props.nbPages - 1) && THREE_DOTS,
    props.nbPages
  ].filter(Boolean)
})

</script>

<template>
  <div class="flex flex-row justify-center">
    <Chevron
      :disabled="value === 1"
      :class="[
        'w-8 h-8 mr-[22px] text-center rounded-full hover:cursor-pointer hover:bg-[#F1F5F9]', 
        { 'hover:bg-white !cursor-not-allowed': value === 1 }
      ]"
      @click="set(value - 1)"
    />
    <span
      v-for="p in range"
      :class="[
        'w-8 h-8 font-medium text-center rounded-full mr-[3px] pt-1 text-gray hover:cursor-pointer hover:bg-[#F1F5F9]',
        { 
          'bg-observer-light text-observer': p === value,
          'hover:bg-neutral-light hover:cursor-default': p === '...'
        }
      ]
      "
      @click="p !== THREE_DOTS ? set(p as number) : () => { }"
    >
      {{ p }}
    </span>
    <Chevron
      direction="right"
      :disabled="value === nbPages"
      :class="[
        'w-8 h-8 ml-[22px] text-center rounded-full hover:cursor-pointer hover:bg-[#F1F5F9]', 
        { 'hover:bg-white !cursor-not-allowed': value === nbPages }
      ]"
      @click="set(value + 1)"
    />
  </div>
</template>

<style scoped>
  
</style>
