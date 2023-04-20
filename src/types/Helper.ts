import { CriteriaAnswer } from "./Criteria"

export type Status = 'highly-active' | 'active' | 'overbooked' | 'observer' | 'sleeper' | 'invited'

export type Helper = {
  helperId: number
  firstname: string
  lastname: string
  email: string
  profilePictureUrl: string
  status: Status
  statusPonderation?: number
  relations: number
  points: number
  joinedOn: string | null
  joinedOnTm: number | string
  tagIds: number[]
  userCriteria: CriteriaAnswer[]
  strongCriteria?: string | null
  mediumCriteria?: string | null
  lowCriteria?: string | null
  score: number
  activeRelationsCount: number
  challengesCount: number
  referralsCount: number
}