export interface PostItemRegisterParams {
  req: {
    ownerWalletDID: string
    realEstateDID: string
    roadNameAddress: string
    transactionType: number
    area: number
    price: number
    monthlyPrice: number
    administrationCost: number
    administrationFeeCategoryList: string
    additionalOptionCategoryList: string
    latitude: number
    longitude: number
    realEstateType: number
    roomNumber: number
    toiletNumber: number
    description: string
    reportRank: number
    buildingFloor: number
    itemFloor: number
    moveInDate: string // 'yyyy.MM.dd (반드시 지켜야함 ㅠㅠ)'
    parkingRate: number
    haveElevator: boolean
  }
  mainImage: File | null
  roomImages: File[]
  kitchenToiletImages: File[]
}

export interface PostItemRegisterResponses {
  itemNo: number
  ownerWalletAddress: string
  realEstateDID: string
  createdAt: string
  mainImageUrl: string
  roomImageUrls: string[]
  kitchenToiletUrls: string[]
}

export interface EstateItemReqType {
  northEastLatitude: number
  northEastLongitude: number
  southWestLatitude: number
  southWestLongitude: number
  realEstateType: number
  reportRank: number
  transactionType: number
  minPrice: number
  maxPrice: number
  minPyeong: number
  maxPyeong: number
}

export interface EstateItemListType {
  itemNo: number
  realEstateDID: string
  roadNameAddress: string
  transactionType: number
  realEstateType: number
  reportRank: number
  transactionStatus: number
  area: number
  pyeong: number
  price: number
  monthlyPrice: number
  administrationCost: number
  contractMonths: number
  latitude: number
  longitude: number
}

export interface EsetateItemResType {
  itemList: EstateItemListType[]
  count: number
}

export interface GetFavoritItemParamsType {
  userAddress: string
  localDateTime: string
}
export interface PostFavoriteDataType {
  walletAddress: string
  itemNo: number
}
