import { CriteriaQuestion } from "./Criteria"
import { Helper } from "./Helper"
import { Stats } from "./Stats"
import { Tag } from "./Tag"

export type Data = {
  stats: Stats
  tags: Tag[]
  criteria: CriteriaQuestion[]
  helpers: Helper[]
}