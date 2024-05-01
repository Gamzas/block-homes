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

export interface CurrentPosition {
  currentPosition: string
  location: {
    latitude: number
    longitude: number
  }
}
