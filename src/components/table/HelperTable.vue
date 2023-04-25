<script setup lang="ts">
import { Ref, computed, onMounted, ref, watch } from 'vue';
import { useMousePressed } from '@vueuse/core'
import { Helper } from '../../types/Helper';
import { cappitalizeFirstLetter, formatDate, formatNumber, formatStatus } from '../../helpers/utils'
import { PerPage } from '../../types/Table'

const emit = defineEmits(['update:modelValue', 'clearQuery', 'showDetail', 'records'])
const props = defineProps({
  helpers: { type: Array as () => Helper[], required: true },
  full: { type: Boolean, required: true },
  query: { type: String, required: true },
  perPage: { type: Number as () => PerPage, default: 25 },
  page: { type: Number, default: 1 },
})

const { pressed } = useMousePressed()

const current: Ref<Helper[]> = ref([])
onMounted(() => {
  current.value = [...props.helpers]
})

/** Table */
const columns: {
  name: string
  property: keyof Helper
  class: string
  format?: Function
  type?: 'number' | 'string'
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
    format: (e: Helper): string => formatNumber(e.relations),
    type: 'number'
  },
  {
    name: 'Points',
    property: 'points',
    class: 'points',
    format: (e: Helper): string => formatNumber(e.points),
    type: 'number'
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

/** Search */
const filteredHelpers = computed(() => {
  const q = props.query.trim().toLowerCase()
  return current.value.filter((h: Helper) => 
    h.firstname.toLowerCase().includes(q) || 
    h.lastname.toLowerCase().includes(q) || 
    h.email.toLowerCase().includes(q)
  )
})

watch(() => props.query, () => emit('records', nbRecords.value))

onMounted(() => emit('records', nbRecords.value))

/** Sort */
const sortColumn: Ref<String | null> = ref(null)
const sortOrder: Ref<'asc' | 'desc' | null> = ref(null)

const setSort = (column: string) => {
  const same = sortColumn.value === column
  if (!sortOrder.value) sortOrder.value = 'desc'
  else if (sortOrder.value === 'desc') sortOrder.value = 'asc'
  else if (sortOrder.value === 'asc') sortOrder.value = null
  if(sortOrder.value) sortColumn.value = column
  current.value = [...props.helpers]
}

const sortedHelpers = computed(() => {
  const type = columns.find(e => e.property === sortColumn.value)?.type || 'string'
  if (sortOrder.value === 'asc') return filteredHelpers.value.sort((a: Helper, b: Helper) => {
    const aString = String(a[sortColumn.value  as keyof Helper]) || ''
    const bString = String(b[sortColumn?.value  as keyof Helper])|| ''
    return type === 'number' ? Number(aString) - Number(bString) : aString.localeCompare(bString)
  })
  if (sortOrder.value === 'desc') return filteredHelpers.value.sort((a: any, b: any) => {
    const aString = String(a[sortColumn.value as keyof Helper])|| ''
    const bString = String(b[sortColumn?.value  as keyof Helper])|| ''
    return type === 'number' ? Number(bString) - Number(aString) : bString.localeCompare(aString)
  })
  return filteredHelpers.value
})

/** Pagination */
const nbRecords = computed(() => filteredHelpers.value.length)

const paginatedHelpers = computed(() => {
  const start = (props.perPage || 0) * (props.page - 1)
  return sortedHelpers.value.slice(start, start + (props.perPage || nbRecords.value))
})

/** Détails on:hover */
const hoveredIndex = ref(-1)
const showDetails = (herlperId: number) => {
  if (herlperId === hoveredIndex.value) return
  const hovered = document.getElementById(String(herlperId)) as HTMLElement
  hoveredIndex.value = herlperId
  const containerTop = document.body.getBoundingClientRect().top
  const rowTop = (hovered as unknown as Element)?.getBoundingClientRect().top;
  emit('showDetail', hovered === null ? -1 : (rowTop - containerTop))
}
watch(() => filteredHelpers.value, (v) => {
  if (v.length === 0) showDetails(-1)
})
</script>

<template>
  <div class="relative">
    <table @mouseleave="showDetails(-1)">
      <thead class="bg-neutral-light border border-neutral h-[40px]">
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
        <tr
          v-for="helper in paginatedHelpers"
          :id="String(helper.helperId)"
          :class="[
            'border border-neutral h-[56px] hover:bg-neutral-light',
            {
              'cursor-grab select-none': pressed,
              'cursor-pointer': !pressed || full
            }
          ]"
          @mouseover="showDetails(helper.helperId)"
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
      </tbody>
    </table>
  </div>
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
