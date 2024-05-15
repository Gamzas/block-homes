import { publicRequest } from '@hooks/requestMethods'
import { CreateChatRoomParamsType } from '@/types/components/chatRoomType'

export const fetchChatRooms = async (userWalletAddress: string) => {
  return publicRequest
    .get(`/chatrooms?type=userWalletAddress&value=${userWalletAddress}`)
    .then(res => res.data)
}

export const createChatRoom = async (
  chatRoomParams: CreateChatRoomParamsType | undefined,
) => {
  console.log(chatRoomParams)
  return publicRequest.post(`/chatrooms`, chatRoomParams).then(res => res.data)
}
