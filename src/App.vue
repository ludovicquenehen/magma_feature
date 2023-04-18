<script setup lang="ts">
import datas from './datas/data'
import TableWrapper from './components/TableWrapper.vue'
import HelperTable from './components/HelperTable.vue'
import { Helper } from './types/Helper';

const helpers: Helper[] = datas.helpers.slice(0, 20)
</script>

<template>
  <div class="flex flex-row">
    <div class="bg-neutral border border-neutral min-h-full min-w-[256px]"></div>
    <TableWrapper>
      <HelperTable :helpers="helpers" />
    </TableWrapper>
  </div>
</template>

<style scoped>

</style>
