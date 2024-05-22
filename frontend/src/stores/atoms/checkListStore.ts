import { REAL_ESTATE_CHECK_LIST_DATA } from '@/constants/RealEstateCheckListData'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const selectedCheckListTypeIndex = atom<number>(0)

export const createCheckListStateAtom = (chatRoomNo: number) =>
  atomWithStorage(
    `chatRoomNo_${chatRoomNo}`, // 고유한 key 생성
    REAL_ESTATE_CHECK_LIST_DATA.map(section => ({
      ...section,
      content: section.content.map(question => ({
        question,
        checked: false,
      })),
    })),
  )
