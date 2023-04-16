import { Helper, Status } from "./Helper"

type HelperStat = Pick<Helper, 
  'firstname' |'lastname' | 'profilePictureUrl' | 'challengesCount' | 'referralsCount'> & { 
  relationsCount: Helper['relations']
}

export type Stats = {
  helpersCount: number
  helpersJoinedCount: number
  helpersInvitedCount: number
  mostEngagedHelpers: HelperStat[]
  helpersRepartition: Record<Status, number>
}