import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import { CoordType, EstateItem } from '@/types/components/estateListType'
import { EsetateItemResType, EstateItemListType } from '@/types/api/itemType'

export const filterAtom = atom<boolean>(false) // false 필터 닫힘, true 필터 열림

// Header 지도 or list 아이콘
export const mapAtom = atom<boolean>(false) // false list true map

export const currentPositonAtom = atom<string>('정자동')

export const currentCoordAtom = atom<CoordType>({
  latitude: 37.365264512305174,
  longitude: 127.10676860117488,
})

// 위치 일치여부 상태관리
export const matchAtom = atom<boolean>(false)

const EstateList = [
  {
    itemList: [
      {
        itemNo: 3,
        realEstateDID: 'did:klay:0x00',
        roadNameAddress: '광주광역시 광산구 장덕동 0000',
        transactionType: 1,
        realEstateType: 1,
        reportRank: 1,
        transactionStatus: 1,
        area: 33,
        pyeong: 9.9825,
        price: 1,
        monthlyPrice: 1,
        administrationCost: 1,
        contractMonths: 1,
        latitude: 0,
        longitude: 0,
      },
    ],
    count: 1,
  },
]
// 전체 부동산 매물
export const estateItemListAtom = atom<EsetateItemResType[] | null>(EstateList)

// 선택된 부동산 매물
export const selectedItemAtom = atomWithStorage<EstateItemListType | 'not'>(
  'selectedItem',
  'not',
)
