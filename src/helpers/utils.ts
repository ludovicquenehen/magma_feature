import { useDateFormat } from '@vueuse/core'
import { Status } from "../types/Helper"

export const cappitalizeFirstLetter = (s: string): string => `${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()}`

export const formatNumber = (n: number): string => !!n ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") : '-'

export const formatDate = (s: string | null): string => {
  if (!s) return '-'
  return useDateFormat(s, 'MMM. DD, YYYY', { locales: 'en-US' }).value
}

const statusMapping: Record<Status, string> = {
  'highly-active': 'Highly active',
  active: 'Active',
  overbooked: 'Overbooked',
  observer: 'Observer',
  sleeper: 'Sleeper',
  invited: 'Invited'
}
export const formatStatus = (s: Status): string => statusMapping[s] || ''