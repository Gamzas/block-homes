import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import { CoordType, EstateItem } from '@/types/estateListType'

export const filterAtom = atom<boolean>(false) // false 필터 닫힘, true 필터 열림

// Header 지도 or list 아이콘
export const mapAtom = atom<boolean>(false) // false list true map

// 위치 일치여부 상태관리
export const currentPositonAtom = atom<string>('정자동')

export const currentCoordAtom = atom<CoordType>({
  latitude: 37.365264512305174,
  longitude: 127.10676860117488,
})

export const matchAtom = atom<boolean>(false)
const EstateList = [
  {
    condition: 'normal',
    address: '남동길 30번길 13 3층',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.2097245,
    longitude: 126.7805472,
  },
  {
    condition: 'bad',
    address: '광주광역시 광산구 오선동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '매매',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.205615,
    longitude: 126.812546,
  },
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204315,
    longitude: 126.812546,
  },
  {
    condition: 'normal',
    address: '남동길 30번길 13 3층',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204615,
    longitude: 126.813546,
  },
  {
    condition: 'bad',
    address: '광주광역시 광산구 오선동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '매매',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.202615,
    longitude: 126.814546,
  },
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '월세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204615,
    longitude: 126.815546,
  },
]

// 전체 부동산 매물
export const estateItemListAtom = atom<EstateItem[] | null>(EstateList)

// 선택된 부동산 매물
export const selectedItemAtom = atomWithStorage<EstateItem | 'not'>(
  'selectedItem',
  'not',
)
