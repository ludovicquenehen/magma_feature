export type CriteriaAnswer = {
  criteriaId: number
  answerKey: string | null
  value: string | null
}

type Weight = 'medium' | 'strong' //TODO: missing type

type Option = {
  key: string
  value: string
}

export type CriteriaType = 'singleSelect' | '' //TODO: missing type (as 'multipleSelect' | 'text'...)

export type CriteriaQuestion = {
  id: number
  type: string
  label: string
  weight: Weight
  options: Option[]
}