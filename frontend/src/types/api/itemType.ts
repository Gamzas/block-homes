export interface PostItemRegisterParams {
  req: {
    ownerWalletDID: string
    realEstateDID: string
    transactionType: number
    area: number
    price: number
    monthlyPrice: number
    administrationCost: number
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
  mainImage: string
  roomImages: string[]
  kitchenToiletImages: string[]
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
