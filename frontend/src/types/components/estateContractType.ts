import BigNumber from "bignumber.js"

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

export interface LeaseContractType {
  contractDate: string // 계약날짜
  deposit: {
    _hex: string
  } // 보증금
  landlordDID: string // 임대인 지갑
  leasePeriod: number // 임대긴간
  propertyDID: string // 부동산 did 주소
  tenantDID: string // 임차인 did 주소
  terms: string // 특약사항
}

export interface RealEstateInfoType {
  area: string
  buildingName: string
  buildingNumber: number
  date: BigNumber
  estateType: number
  isNotPermitted: boolean
  isViolated: boolean
  purpose: string
  roadNameAddress: string
  roomNumber: number
}
