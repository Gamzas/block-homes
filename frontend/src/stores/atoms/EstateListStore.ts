import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import { CoordType, EstateItem } from '@/types/components/estateListType'
import { EstateItemResType } from '@/types/api/itemType'
import { itemList } from '../../utils/item'

export const filterAtom = atom<boolean>(false) // false 필터 닫힘, true 필터 열림

// Header 지도 or list 아이콘
export const mapAtom = atom<boolean>(true) // false list true map

export const currentPositonAtom = atom<string>('정자동')

// 마커 좌표
export const currentCoordAtom = atom<CoordType>({
  latitude: 37.365264512305174,
  longitude: 127.10676860117488,
})

// 지도 중심 좌표
export const mapCenterCoordAtom = atom<CoordType>({
  latitude: 37.365264512305174,
  longitude: 127.10676860117488,
})

// 사용자 현재 위치
export const userCoordAtom = atom<CoordType>({
  latitude: 37.365264512305174,
  longitude: 127.10676860117488,
})

// 위치 일치여부 상태관리
export const matchAtom = atom<boolean>(false)

// 전체 부동산 매물
export const estateItemListAtom = atom<EstateItemResType | null>(itemList)

// 선택된 부동산 매물
export const selectedItemAtom = atomWithStorage<EstateItem | 'not'>(
  'selectedItem',
  'not',
)
