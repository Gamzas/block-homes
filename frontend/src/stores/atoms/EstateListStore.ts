import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import { CurrentPosition } from '@/types/estateListType'

export const filterAtom = atom<boolean>(false) // false 필터 닫힘, true 필터 열림

export const mapAtom = atom<boolean>(false) // false list true map

const defaultPosition = {
  currentPosition: '정자동',
  location: {
    latitude: 37.365264512305174,
    longitude: 127.10676860117488,
  },
}
export const currentPositonAtom = atomWithStorage<CurrentPosition>(
  'currentPosition',
  defaultPosition,
)
