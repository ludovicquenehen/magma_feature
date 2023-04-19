<script setup lang="ts">
import { computed, ref, Ref, watch } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import { useTableScroll } from './../composables/useTableScroll'
import Input from './../components/Input.vue'
import { Helper } from './../types/Helper';
import datas from './../datas/data'

/** Table behavior */
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

/** Search */
const helpers: Helper[] = datas.helpers.slice(0, 20)
const query = ref('')
const filterHelpers = computed(() => {
  const q = query.value.trim()
  return helpers.filter((h: Helper) => h.firstname.includes(q) || h.lastname.includes(q) || h.email.includes(q))
})
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="ml-8 mt-8">
      <Input v-model="query" icon="search" type="text" placeholder="Search any helper..." />
    </div>
    <div
      ref="wrapper"
      :class="[
        'flex flex-col shadow-md border-collapse rounded-lg mx-8 overflow-x-hidden',
        {
          'shadow-left': shadowedLeft && !shadowedRight,
          'shadow-right': shadowedRight && !shadowedLeft,
          'shadow-x': shadowedRight && shadowedLeft,
        }
      ]"
    >
      <slot :helpers="filterHelpers" :full="fullyVisible"></slot>
    </div>
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
