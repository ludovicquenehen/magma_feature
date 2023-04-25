<script setup lang="ts">
import { computed, ref, Ref, watch, onUpdated } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import { useTableScroll } from '../../composables/useTableScroll'
import InputText from '../inputs/InputText.vue'
import { Helper, Status } from '../../types/Helper';
import datas from '../../datas/data'
import { getHelperCriteriaByWeight } from '../../helpers/criteria';

/** Table behavior */
const TABLE_LIMIT = 1692
const PAGINATION_HEIGHT = 56
const wrapper = ref<HTMLElement | null>(null)
const { x } = useScroll(wrapper)
const { width } = useWindowSize()
const { delta }: { delta: Ref<number> } = useTableScroll()
const shadowedLeft = computed(() => x.value > 0)
const shadowedRight = computed(() => (width.value + x.value) < TABLE_LIMIT)
const fullyVisible = computed(() => !shadowedLeft.value && !shadowedRight.value)
const shadowStyle: string = ref('')
watch(() => delta.value, () => {
  x.value += delta.value
})

onUpdated(() => {
  shadowStyle.value = `width:${wrapper.value?.getBoundingClientRect()?.width || 0}px;
    height:${wrapper.value?.getBoundingClientRect()?.height - PAGINATION_HEIGHT || 0}px;`
})

/** Search */
const STATUS_PONDERATION: Record<Status, number> = {
  'highly-active': 5,
  'active': 4,
  'overbooked': 3,
  'observer': 2,
  'sleeper': 1,
  'invited': 0
}
const helpers: Helper[] = datas.helpers.map((e: Helper) => ({
  ...e,
  statusPonderation: STATUS_PONDERATION[e.status],
  strongCriteria: getHelperCriteriaByWeight(e.userCriteria, 'strong')?.value,
  mediumCriteria: getHelperCriteriaByWeight(e.userCriteria, 'medium')?.value,
  lowCriteria: getHelperCriteriaByWeight(e.userCriteria, 'low')?.value,
  joinedOnTm: e.joinedOn ? new Date(e.joinedOn).getTime() : '-'
}))

const query = ref('')
const clearQuery = () => query.value = ''
defineExpose({
  clearQuery
})
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="ml-8 my-8">
      <InputText v-model="query" icon="search" placeholder="Search any helper..." />
    </div>
    <div
      ref="wrapper"
      :class="[
        'flex flex-col shadow-md border-collapse rounded-lg mx-8 mb-24 overflow-x-hidden',
      ]"
    >
      <div inert :style="shadowStyle" :class="[
          `absolute flex flex-col border-collapse rounded-lg rounded-b-none overflow-x-hidden z-10`,
          {
            'shadow-left': shadowedLeft && !shadowedRight,
            'shadow-right': shadowedRight && !shadowedLeft,
            'shadow-x': shadowedLeft && shadowedRight,
          }
        ]">

      </div>
      <slot :helpers="helpers" :full="fullyVisible" :query="query"></slot>
    </div>
  </div>
</template>

<style scoped>
  .shadow-x {
    box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,0.2), inset -25px 0px 25px -25px rgba(0,0,0,0.2);
  }
  .shadow-left {
    box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,0.2);
  }

  .shadow-right {
    box-shadow: inset -25px 0px 50px -25px rgba(0,0,0,0.2);
  }
</style>
