export type CriteriaAnswer = {
  criteriaId: CriteriaQuestion['id']
  answerKey: string | null
  value: string | null
}

export type Weight = 'low' | 'medium' | 'strong'

type Option = {
  key: string
  value: string
}

export type CriteriaType = 'singleSelect'

export type CriteriaQuestion = {
  id: number
  type: string
  label: string
  weight: Weight
  options: Option[]
}