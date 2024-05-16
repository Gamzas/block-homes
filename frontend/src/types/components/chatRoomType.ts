import { MessageType } from '@/types/components/chatType'

export interface ChatRoomListType {
  representativeImage: string
  address: string
  transactionType: number
  price: number
  lastChat: string
  dangerType: string
  chatRoomNum: number
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
  chatList: MessageType[]
}
