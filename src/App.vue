<script setup lang="ts">
import { computed, ref } from 'vue';
import TableWrapper from './components/table/TableWrapper.vue'
import HelperTable from './components/table/HelperTable.vue'

const wrapper = ref(null)
const container = ref(null)
const detailsPosition = ref('')
const wrapperLimit = computed(() => {
  const containerTop = document.body.getBoundingClientRect().left
  const right = (container?.value as unknown as Element)?.getBoundingClientRect().right - containerTop - 140
  return right
})
const setDetailsPosition = (v: string) => {
  detailsPosition.value = v
}
</script>

<template>
  <div class="flex flex-row">
    <div class="bg-neutral border border-neutral min-h-full min-w-[256px]"></div>
    <TableWrapper ref="wrapper">
      <template v-slot="props">
        <div ref="container">
          <HelperTable :helpers="props.helpers" :full="props.full" :query="props.query" @clearQuery="wrapper?.clearQuery" @showDetail="setDetailsPosition" />
        </div>
      </template>
    </TableWrapper>
  </div>
  <div
    v-if="+detailsPosition !== -1"
    inert
    :style="{
      top: `${detailsPosition}px`,
      left: `${wrapperLimit}px`
    }"
    class="absolute h-[56px] bg-neutral-light/50 pt-[18px] pl-14 text-observer font-medium"
    >
      <p>Détails</p>
  </div>
</template>

<style scoped>

</style>
