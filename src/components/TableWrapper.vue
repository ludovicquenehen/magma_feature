<script setup lang="ts">
import { computed, ref, Ref, watch } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import { useTableScroll } from './../composables/useTableScroll'

const TABLE_LIMIT = 1692

const wrapper = ref<HTMLElement | null>(null)
const { x } = useScroll(wrapper)
const { width } = useWindowSize()
const { delta }: { delta: Ref<number> } = useTableScroll()
const shadowedLeft = computed(() => x.value > 0)
const shadowedRight = computed(() => (width.value + x.value) < TABLE_LIMIT)
const fullyVisible = computed(() => !shadowedLeft.value && !shadowedRight.value)

watch(() => delta.value, () => {
  x.value += delta.value
})
</script>

<template>
    <div
      ref="wrapper"
      :class="[
        'flex flex-col shadow-md border-collapse rounded-lg p-8 m-8 overflow-x-hidden',
        {
          'shadow-left': shadowedLeft && !shadowedRight,
          'shadow-right': shadowedRight && !shadowedLeft,
          'shadow-x': shadowedRight && shadowedLeft,
        }
      ]"
    >
      <slot name="search"></slot>
      <slot name="table" :full="fullyVisible"></slot>
    </div>
</template>

<style scoped>
  .shadow-x {
    box-shadow: inset 25px 0px 50px -25px rgba(0,0,0,0.1), inset -25px 0px 50px -25px rgba(0,0,0,0.1);
  }
  .shadow-left {
    box-shadow: inset 25px 0px 50px -25px rgba(0,0,0,0.1);
  }

  .shadow-right {
    box-shadow: inset -25px 0px 50px -25px rgba(0,0,0,0.1);
  }
</style>
