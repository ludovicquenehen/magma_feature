<script setup lang="ts">
import { onMounted, ref, Ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core'
import TableWrapper from './components/table/TableWrapper.vue'
import HelperTable from './components/table/HelperTable.vue'

const wrapper: Ref<InstanceType <typeof TableWrapper> | null> = ref(null)
const container = ref(null)
const detailsPosition = ref('')
const wrapperLimit = ref(-1)
const setDetailsPosition = (v: string) => {
  detailsPosition.value = v
}
const setWrapperLimit = () => {
  const containerLeft = document.body.getBoundingClientRect().left
  const right = (container?.value as unknown as Element)?.getBoundingClientRect().right
  wrapperLimit.value = right - containerLeft
}

const { width } = useWindowSize()
watch(() => width.value, () => {
  setWrapperLimit()
})

onMounted(() => setWrapperLimit())
</script>

<template>
  <div class="flex flex-row">
    <div class="bg-neutral border border-neutral min-h-full min-w-[256px]"></div>
    <TableWrapper ref="wrapper">
      <template v-slot="props">
        <div ref="container">
          <HelperTable
            :helpers="props.helpers"
            :full="props.full"
            :query="props.query"
            @clearQuery="wrapper?.clearQuery"
            @showDetail="setDetailsPosition"
          />
        </div>
      </template>
    </TableWrapper>
  </div>
  <div
    v-if="Number(detailsPosition) !== -1"
    inert
    :style="{
      top: `${detailsPosition}px`,
      left: `${wrapperLimit - 140}px`
    }"
    class="absolute h-[56px] bg-neutral-light/50 pt-[18px] pl-14 text-observer font-medium"
  >
    <p>Détails</p>
  </div>
</template>

<style scoped>

</style>
