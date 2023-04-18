import datas from '../datas/data'
import { CriteriaAnswer, CriteriaQuestion, Weight } from "../types/Criteria";

export const getHelperCriteriaByWeight = (e: CriteriaAnswer[], weight: Weight): CriteriaAnswer => e.filter((ca: CriteriaAnswer) => {
  const question: CriteriaQuestion | null = datas.criteria.find((cq: CriteriaQuestion) => cq.id === ca.criteriaId) || null
  return question?.weight === weight || null
})?.[0]