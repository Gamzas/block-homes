export interface ChatRoomListType {
  representativeImage: string
  address: string
  transactionType: number
  price: number
  lastChat: string
  dangerType: string
  chatRoomNum: number
}

export interface fetchChatRoomsRequestType {
  mode: number
  walletAddress: string
}

export interface chatRoomRequestDataType {
  itemNo: number
  userWalletAddress: string
}

export interface ChatRoomCheckResponseType {
  status: number
  data?: {
    chatRoomNo?: number
  }
}
