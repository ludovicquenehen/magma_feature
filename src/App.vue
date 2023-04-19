<script setup lang="ts">
import TableWrapper from './components/TableWrapper.vue'
import HelperTable from './components/HelperTable.vue'
</script>

<template>
  <div class="flex flex-row">
    <div class="bg-neutral border border-neutral min-h-full min-w-[256px]"></div>
    <TableWrapper>
      <template v-slot="props">
        <HelperTable :helpers="props.helpers" :full="props.full" />
      </template>
    </TableWrapper>
  </div>
</template>

<style scoped>

</style>
