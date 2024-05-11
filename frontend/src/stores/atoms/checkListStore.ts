import { REAL_ESTATE_CHECK_LIST_DATA } from '@/constants/RealEstateCheckListData'
import { atom } from 'jotai'

export const selectedCheckListTypeIndex = atom<number>(0)

export const checkListState = atom(
  REAL_ESTATE_CHECK_LIST_DATA.map(section => ({
    ...section,
    content: section.content.map(question => ({
      question,
      checked: false,
    })),
  })),
)
