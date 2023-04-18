<script setup lang="ts">
import { computed, ref, Ref, watch } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import { useTableScroll } from './../composables/useTableScroll'

const TABLE_LIMIT = 1692

const wrapper = ref<HTMLElement | null>(null)
const { x } = useScroll(wrapper)
const { width } = useWindowSize()
const { pressed, delta }: { pressed: Ref<boolean>, delta: Ref<number> } = useTableScroll()
const shadowedLeft = computed(() => x.value > 0)
const shadowedRight = computed(() => (width.value + x.value) < TABLE_LIMIT)

watch(() => delta.value, () => {
  console.log(width.value, delta.value, x.value)
  x.value += delta.value
})
</script>

<template>
    <div
      ref="wrapper"
      :class="[
        'flex flex-row shadow-md border-collapse rounded-lg m-8 overflow-x-hidden',
        {
          'cursor-grab select-none': pressed,
          'shadow-left': shadowedLeft && !shadowedRight,
          'shadow-right': shadowedRight && !shadowedLeft,
          'shadow-x': shadowedRight && shadowedLeft,
        }
      ]"
    >
      <slot />
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
