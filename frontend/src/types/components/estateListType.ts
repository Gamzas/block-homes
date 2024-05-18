export interface RealEstateCategoryType {
  src: string
  title: string
  transactionType1: string
  transactionType2: string | null
}

export interface RealEstateStatusType {
  condition: string
  color1: string
}

export interface CoordType {
  latitude: number
  longitude: number
}

export interface EstateItem {
  condition: string
  address: string
  infos: string[]
  leaseType: string
  price: string
  roomSize: string
  roomCount: string
  createDate: string
  latitude: number
  longitude: number
}

export interface ItemImage {
  imageUrl: string
  itemImageCategory: number
}

export interface DetailItemType {
  itemNo: number
  ownerDID: string
  realEstateDID: string
  roadNameAddress: string
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
  roomNumber: number
  toiletNumber: number
  description: string
  buildingFloor: number
  itemFloor: number
  moveInDate: string
  parkingRate: number
  haveElevator: boolean
  transactionType: number
  isUserLiked: boolean
  createdAt: string
  itemImageList: ItemImage[]
  itemAdministrationFeeList: number[]
  itemAdditionalOptionList: number[]
}

export interface FilterType {
  // realEstateType: number
  // reportRank: number
  transactionType: number
  minPrice: number
  maxPrice: number
  minPyeong: number
  maxPyeong: number
}

export interface ReqCoordType {
  northEastLatitude: number
  northEastLongitude: number
  southWestLatitude: number
  southWestLongitude: number
}
