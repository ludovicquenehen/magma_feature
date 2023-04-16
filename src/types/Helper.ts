import { CriteriaAnswer } from "./Criteria"

export type Status = 'highly-active' | 'active' | 'overbooked' | 'observer' | 'sleeper' | 'invited'

export type Helper = {
  helperId: number
  firstname: string
  lastname: string
  email: string
  profilePictureUrl: string
  status: Status
  relations: number
  points: number
  joinedOn: string | null
  lastSeen: string | null
  tagIds: number[]
  userCriteria: CriteriaAnswer[]
  score: number
  activeRelationsCount: number
  challengesCount: number
  referralsCount: number
}