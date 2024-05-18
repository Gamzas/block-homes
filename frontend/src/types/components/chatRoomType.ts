import { MessageType } from '@/types/components/chatType'

export interface ChatRoomListType {
  representativeImage: string
  roadNameAddress: string
  transactionType: number
  price: number
  lastChat: string
  reportRank: string
  role: number
  itemNo: number
  chatRoomNo: number
}

export interface FetchChatRoomsRequestType {
  mode: number
  walletAddress: string
}

export interface ChatRoomRequestDataType {
  itemNo: number
  walletAddress: string
}

export interface ChatRoomCheckResponseType {
  status: number
  data?: {
    chatRoomNo?: number
  }
}

export interface FetchChatRoomResponseType {
  representativeImage: string
  realEstateAddress: string
  transactionType: number
  price: number
  itemNo: number
  sellerWalletAddress: string
  buyerWalletAddress: string
  chatList: MessageType[]
}
