<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue';
import { useMousePressed } from '@vueuse/core'
import { Helper } from '../../types/Helper';
import { cappitalizeFirstLetter, formatDate, formatNumber, formatStatus } from '../../helpers/utils'
import Pagination from '../Pagination/Pagination.vue'
import InputSelect from '../innputs/InputSelect.vue';

export type PerPage = 25 | 50 | 100 | null

defineEmits(['clearQuery'])
const props = defineProps({
  helpers: { type: Array as () => Helper[], required: true },
  full: { type: Boolean, required: true },
  query: { type: String, required: true },
})

const { pressed } = useMousePressed()

/** Table */
const columns: {
  name: string
  property: keyof Helper
  class: string
  format?: Function
}[] = [
{
    name: 'Helper',
    property: 'firstname',
    class: 'helper'
  },
  {
    name: 'Status',
    property: 'statusPonderation',
    class: 'status'
  },
  {
    name: 'Relations',
    property: 'relations',
    class: 'relations',
    format: (e: Helper): string => formatNumber(e.relations)
  },
  {
    name: 'Points',
    property: 'points',
    class: 'points',
    format: (e: Helper): string => formatNumber(e.points)
  },
  {
    name: 'Joined on',
    property: 'joinedOnTm',
    class: 'joined-on',
    format: (e: Helper): string => formatDate(e.joinedOn)
  },
  {
    name: 'Strong criteria',
    property: 'strongCriteria',
    class: 'criteria',
    format: (e: Helper): string => e.strongCriteria || '-'
  },
  {
    name: 'Medium criteria',
    property: 'mediumCriteria',
    class: 'criteria',
    format: (e: Helper): string => e.mediumCriteria || '-'
  },
  {
    name: 'Low criteria',
    property: 'lowCriteria',
    class: 'criteria',
    format: (e: Helper): string => e.lowCriteria || '-'
  },
]

/** Sort */
const sortColumn: Ref<String | null> = ref(null)
const sortOrder: Ref<'asc' | 'desc' | null> = ref(null)

const setSort = (column: string) => {
  page.value = 1

  const same = sortColumn.value === column
  if (!sortOrder.value) sortOrder.value = 'desc'
  else if (same) {
    if (sortOrder.value === 'desc') sortOrder.value = 'asc'
    else sortOrder.value = null
  }
  if (sortOrder.value) sortColumn.value = column
  else {
    sortColumn.value = null
    sortOrder.value = null

  }
}

const sortedHelpers = computed(() => {
  if (sortOrder.value === 'asc') return props.helpers.sort((a: any, b: any) => a[sortColumn.value as string] - b[sortColumn.value as string])
  if (sortOrder.value === 'desc') return props.helpers.sort((a: any, b: any) => b[sortColumn.value as string] - a[sortColumn.value as string])
  return props.helpers
})


/** Pagination */
const nbRecords = computed(() => props.helpers.length)
const page = ref(1)
const perPage: Ref<PerPage> = ref(25)
const nbPages = computed(() => {
  return ~~(nbRecords.value / (perPage.value || 1)) + 1
})

const paginatedHelpers = computed(() => {
  const start = (perPage.value || 0) * (page.value - 1)
  return sortedHelpers.value.slice(start, start + (perPage.value || nbRecords.value))
})

watch(() => props.query, () => page.value = 1)
watch(() => perPage.value, () => page.value = 1)
</script>

<template>
  <table>
    <thead class="bg-neutral-light border border-neutral h-[40px]"><!-- //TODO: missing inner shadow -->
      <tr>
        <!-- //TODO: col width not fixed: toggling on search/sort/paginate -->
        <td
          v-for="column in columns"
          :class="`text-xs text-gray text-left py-3 pl-6 ${column.class}`"
        >
          <div class="flex hover:cursor-pointer" @click="setSort(column.property)">
            <span class="mr-[6.92px]">{{ column.name }}</span>
            <img v-if="column.property === sortColumn && sortOrder === 'asc'" src="/images/svg/arrow-up.svg" />
            <img v-if="column.property === sortColumn && sortOrder === 'desc'" src="/images/svg/arrow-down.svg" />
          </div>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr v-if="paginatedHelpers.length === 0">
        <td :colspan="columns.length">
          <div class="flex justify-center items-center">
            <div class="flex flex-col justify-center items-center h-[240px] w-[380px]">
              <div class="rounded-full flex justify-center items-center p-2 bg-ripple-1 h-12 w-12 mb-4">
                <div class="rounded-full flex justify-center items-center p-2 bg-ripple-2 h-full w-full">
                  <img src="/images/svg/search-blue.svg" class="w-[18px] mt-[8]" />
                </div>
              </div>
              <span class="text-dark text-center leading-6 mb-1">No helper found</span>
              <span class="text-gray text-center text-sm">Your search “<span class="font-semibold">{{ query }}</span>” didn’t match with any helper.</span>
              <span class="text-observer text-center font-medium mt-[26px] hover:cursor-pointer" @click="$emit('clearQuery')">Clear search</span>
            </div>
          </div>
        </td>
      </tr>
      <!-- //TODO: hover override table inner shadow -->
      <tr
        v-for="helper in paginatedHelpers"
        :class="[
          'border border-neutral h-[56px] hover:bg-neutral-light',
          {
            'cursor-grab select-none': pressed,
            'cursor-pointer': !pressed || full
          }
        ]"
        >
        <td v-for="column in columns" class="pl-6">
          <template v-if="column.name === 'Helper'">
            <div class="flex items-center pr-4">
              <img :src="helper.profilePictureUrl" class="rounded-full h-8 w-8 mr-3 my-3"/>
              <div class="flex flex-col text-left">
                <span class="text-sm font-medium text-black leading-5">{{ cappitalizeFirstLetter(helper.firstname) }} {{ cappitalizeFirstLetter(helper.lastname) }}</span>
                <span class="text-sm font-medium text-gray leading-5">{{ helper.email }}</span>
              </div>
            </div>
          </template>
          <template v-else-if="column.name === 'Status'">
            <span :class="[
              'rounded-full text-xs font-medium py-0.5 px-1.5',
              { 'bg-highly-active-light text-highly-active': helper.status === 'highly-active' },
              { 'bg-active-light text-active': helper.status === 'active' },
              { 'bg-overbooked-light text-overbooked': helper.status === 'overbooked' },
              { 'bg-observer-light text-observer': helper.status === 'observer' },
              { 'bg-sleeper-light text-sleeper': helper.status === 'sleeper' },
              { 'bg-invited-light text-invited': helper.status === 'invited' },
            ]">
              {{ formatStatus(helper.status) }}
            </span>
          </template>
          <template v-else>
            <span class="text-sm text-gray text-left">{{ column.format ? column.format(helper) : '-' }}</span>
          </template>
        </td>
      </tr>
      <tr class="border border-neutral h-[56px]">
        <td :colspan="columns.length" class="relative">
          <Pagination v-if="nbPages > 1" v-model="page" :nb-pages="nbPages" class="static" />
          <InputSelect v-model="perPage" :options="[25, 50, 100, null]" class="absolute top-4 right-4" />
        </td><!-- //TODO: trailing inner shadow -->
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  .helper {
    min-width: 296px;
  }

  .status {
    min-width: 128px;
  }

  .relations {
    min-width: 96px;
  }

  .points {
    min-width: 96px;
  }

  .joined-on {
    min-width: 136px;
  }

  .criteria {
    min-width: 200px;
  }
</style>
