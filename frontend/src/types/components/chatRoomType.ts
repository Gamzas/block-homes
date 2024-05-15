export interface ChatRoomListType {
  representativeImage: string
  address: string
  transactionType: number
  price: number
  lastChat: string
  dangerType: string
  chatRoomNum: number
}

export interface chatRoomRequestBodyType {
  realEstateNo: number
export interface fetchChatRoomsRequestType {
  mode: number
  value: string
}

  userWalletAddress: string
}
