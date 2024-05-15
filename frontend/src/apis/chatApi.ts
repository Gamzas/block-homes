import { publicRequest } from '@hooks/requestMethods'
import { chatRoomRequestBodyType } from '@/types/components/chatRoomType'

export const fetchChatRooms = async (userWalletAddress: string) => {
  return publicRequest
    .get(`/chatrooms?type=userWalletAddress&value=${userWalletAddress}`)
    .then(res => res.data)
}

export const createChatRoom = async (
  chatRoomRequestBody: chatRoomRequestBodyType | undefined,
) => {
  console.log(chatRoomRequestBody)
  return publicRequest
    .post(`/chatrooms`, chatRoomRequestBody)
    .then(res => res.data)
}
