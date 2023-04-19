<script setup lang="ts">
import { computed, ref } from 'vue';
import TableWrapper from './components/TableWrapper.vue'
import HelperTable from './components/HelperTable.vue'
import Input from './components/Input.vue'
import { Helper } from './types/Helper';
import datas from './datas/data'

const helpers: Helper[] = datas.helpers.slice(0, 20)
const query = ref('')
const filterHelpers = computed(() => {
  const q = query.value.trim()
  return helpers.filter((h: Helper) => h.firstname.includes(q) || h.lastname.includes(q) || h.email.includes(q))
})
</script>

<template>
  <div class="flex flex-row">
    <div class="bg-neutral border border-neutral min-h-full min-w-[256px]"></div>
    <TableWrapper>
      <template v-slot:search>
        <Input v-model="query" icon="search" type="text" placeholder="Search any helper..." />
      </template>
      <template v-slot:table="props">
        <HelperTable :helpers="filterHelpers" :full="props.full" />
      </template>
    </TableWrapper>
  </div>
</template>

<style scoped>

</style>
