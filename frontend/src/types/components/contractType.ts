export interface User {
  walletAddress: string
  name: string
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

export interface ItemImage {
  imageUrl: string
  itemImageCategory: number
}

export interface WalletData {
  name: string
  userDID: string
  walletAddress: string
}
