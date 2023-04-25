<script setup lang="ts">
import { computed, ref, Ref, watch, onUpdated } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import { useTableScroll } from '../../composables/useTableScroll'
import InputText from '../inputs/InputText.vue'
import Pagination from '../pagination/Pagination.vue'
import InputSelect from '../inputs/InputSelect.vue';
import { Helper, Status } from '../../types/Helper';
import datas from '../../datas/data'
import { getHelperCriteriaByWeight } from '../../helpers/criteria';

const props = defineProps({
  records: { type: Number, required: true },
})
const emit = defineEmits(['page', 'perPage'])

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

const shadowStyle: string = ref('')
const widthStyle: string = ref('')
onUpdated(() => {
  widthStyle.value = `width:${wrapper.value?.getBoundingClientRect()?.width || 0}px;`
  shadowStyle.value = `${widthStyle.value} height:${wrapper.value?.getBoundingClientRect()?.height || 0}px;`
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

/** Pagination */
const page = ref(1)
const perPage = ref(25)
const nbPages = computed(() => {
  if (perPage.value === null) return 1
  return ~~(props.records / (perPage.value || 1)) + 1
})

watch(() => query.value, () => page.value = 1)
watch(() => perPage.value, () => {
  page.value = 1
  emit('perPage', perPage.value)
})
watch(() => page.value, () => emit('page', page.value))
</script>

<template>
  <div class="flex flex-col overflow-hidden">
    <div class="overflow-x-hidden">
      <div class="ml-8 my-8">
        <InputText v-model="query" icon="search" placeholder="Search any helper..." />
      </div>
      <div
        ref="wrapper"
        :class="[
          'flex flex-col shadow-md border-collapse rounded-lg mx-8 overflow-x-hidden',
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
    <div :style="widthStyle" class="h-14 flex flex-row justify-between mx-8 py-3 pr-3 border border-t-0 border-neutral rounded-lg shadow-b-md rounded-t-none">
      <div class="w-full flex justify-center">
        <Pagination v-if="nbPages > 1" v-model="page" :nb-pages="nbPages" />
      </div>
      <InputSelect v-model="perPage" label="Row per page:" :options="[25, 50, 100, null]" />
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
