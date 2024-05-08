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

export interface EstateItem {
  condition: string;
  address: string;
  infos: string[];
  leaseType: string;
  price: string;
  roomSize: string;
  roomCount: string;
  createDate: string;
  latitude: number;
  longitude: number;
}
