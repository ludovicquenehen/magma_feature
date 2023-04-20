<script setup lang="ts">
import { ref } from 'vue';
import TableWrapper from './components/TableWrapper.vue'
import HelperTable from './components/HelperTable.vue'

const wrapper = ref(null)
</script>

<template>
  <div class="flex flex-row">
    <div class="bg-neutral border border-neutral min-h-full min-w-[256px]"></div>
    <TableWrapper ref="wrapper">
      <template v-slot="props">
        <HelperTable :helpers="props.helpers" :full="props.full" :query="props.query" @clearQuery="wrapper?.clearQuery" />
      </template>
    </TableWrapper>
  </div>
</template>

<style scoped>

</style>
