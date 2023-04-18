import { CriteriaAnswer, Weight } from "../types/Criteria"
import { Status } from "../types/Helper"
import { getHelperCriteriaByWeight } from "./criteria"
import moment from 'moment'

export const cappitalizeFirstLetter = (s: string): string => `${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()}`

export const formatNumber = (n: number): string => !!n ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") : '-'

export const formatDate = (s: string): string => {
  if (!s) return '-'
  return moment(s).format('MMM. DD, YYYY')
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

export const formatCriteria = (c: CriteriaAnswer[], weight: Weight): string => getHelperCriteriaByWeight(c, weight)?.value || '-'