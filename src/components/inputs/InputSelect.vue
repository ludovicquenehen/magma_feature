<script setup lang="ts">
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import Chevron from '../icons/Chevron.vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: { type: Number as () => Number | null, required: true },
  options: { type: Array<Number | null>, required: true },
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: Number | null) {
    emit('update:modelValue', value)
  }
})

/** Options */
const targetOptions = ref(null)
const open = ref(false)
onClickOutside(targetOptions, () => open.value = false)
</script>

<template>
  <div
    :class="[
      'bg-white border-[#CBD5E1] absolute w-[59px] h-[32px] mb-6 flex flex-row border rounded-[5px]',
      { '!border-observer focused': open }
    ]"
    @click="open = true"
  >
    <span
      @click="open = true"
      class="flex justify-between items-center ml-[10px]"
    >
      <span>{{ value ? value : 'All' }}</span>
      <Chevron :direction="open ? 'down' : 'up'" class="mx-3" @click="open = true" />
    </span>
    <!-- //TODO: z-index/overflow issue -->
    <div
      v-if="open"
      ref="targetOptions"
      class="relative bottom-[-44px] left-[-46px] z-10"
      @click="open = false"
    >
      <div
      class="
        border border-[#CBD5E1]
        flex flex-col items-center w-[59px]
        shadow-lg rounded-xl
        text-center
      "
      >
        <span
          v-for="opt in options"
          class="flex justify-center items-center h-9 w-full hover:cursor-pointer hover:bg-neutral-light"
          @click="value = opt"
        >
          {{ opt ? opt : 'All' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.focused {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #C7D7FE;
}
</style>
