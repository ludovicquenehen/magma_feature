<script setup lang="ts">
import { Helper } from '../types/Helper';
import { cappitalizeFirstLetter, formatCriteria, formatDate, formatNumber, formatStatus } from '../helpers/utils'

defineProps({
  helpers: { type: Array as () => Helper[], required: true },
  query: { type: String, default: '' }
})

const columns: {
  name: string
  class: string
  sortable?: 'asc' | 'desc'
  format?: Function
}[] = [
{
    name: 'Helper',
    class: 'helper'
  },
  {
    name: 'Status',
    class: 'status'
  },
  {
    name: 'Relations',
    class: 'relations',
    format: (e: Helper) => formatNumber(e.relations)
  },
  {
    name: 'Points',
    class: 'points',
    format: (e: Helper) => formatNumber(e.points)
  },
  {
    name: 'Joined on',
    class: 'joined-on',
    format: (e: Helper) => e.joinedOn && formatDate(e.joinedOn)
  },
  {
    name: 'Strong criteria',
    class: 'criteria',
    format: (e: Helper) => formatCriteria(e.userCriteria, 'strong')
  },
  {
    name: 'Medium criteria',
    class: 'criteria',
    format: (e: Helper): string => formatCriteria(e.userCriteria, 'medium')
  },
  {
    name: 'Low criteria',
    class: 'criteria',
    format: (e: Helper) => formatCriteria(e.userCriteria, 'low')
  },
]
</script>

<template>
  <table class="shadow-md border-collapse rounded-lg overflow-hidden"><!-- //TODO: fix border corner -->
    <thead class="bg-neutral-light border border-neutral h-[40px]">
      <tr>
        <td v-for="column in columns" :class="`text-xs text-gray text-left py-3 pl-6 ${column.class}`">{{ column.name }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="helper in helpers" class="border border-neutral h-[56px]">
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
        <td :colspan="columns.length">PAGINATION</td><!-- //TODO: pagination -->
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
