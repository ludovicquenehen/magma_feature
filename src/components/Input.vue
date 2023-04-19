<script setup lang="ts">
import { ref } from 'vue';

const el = ref<HTMLElement | null>(null)

const emit = defineEmits(['update:value'])
defineProps({
  icon: { type: String, default: null },
})

const current = ref('')
const focused = ref(false)

const clear = () => current.value = ''
</script>

<template>
  <div
    :class="[
      'wrapper relative w-[400px] h-[40px] mb-6 flex flex-row border rounded-[5px]',
      { '!border-observer focused': focused }
    ]"
  >
    <img :src="`/images/svg/${icon}.svg`" class="absolute left-[18px] top-[14px]" />
    <input
      ref="el"
      v-model="current"
      v-bind="$attrs"
      @input="emit('update:value', current)"
      @focus="focused = true"
      @blur="focused = false"
      class="bg-white ml-[40px] focus:outline-none !w-full"
    />
    <img v-if="current !== ''" src="/images/svg/cross.svg" class="absolute right-[18px] top-[14px]" @click="clear" />
  </div>
</template>

<style scoped>
.wrapper {
  border-color: #CBD5E1
}

.focused {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #C7D7FE;
}
</style>
