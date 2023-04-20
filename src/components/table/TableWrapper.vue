<script setup lang="ts">
import { computed, ref, Ref, watch } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import { useTableScroll } from '../../composables/useTableScroll'
import InputText from '../innputs/InputText.vue'
import { Helper, Status } from '../../types/Helper';
import datas from '../../datas/data'
import { getHelperCriteriaByWeight } from '../../helpers/criteria';

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
const filterHelpers = computed(() => {
  const q = query.value.trim()
  return helpers.filter((h: Helper) => h.firstname.includes(q) || h.lastname.includes(q) || h.email.includes(q))
})
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
        {
          'shadow-left': shadowedLeft && !shadowedRight,
          'shadow-right': shadowedRight && !shadowedLeft,
          'shadow-x': shadowedRight && shadowedLeft,
        }
      ]"
    >
      <slot :helpers="filterHelpers" :full="fullyVisible" :query="query"></slot>
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
