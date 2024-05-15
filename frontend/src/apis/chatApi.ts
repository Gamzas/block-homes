import { publicRequest } from '@hooks/requestMethods'
import { chatRoomRequestBodyType } from '@/types/components/chatRoomType'
  fetchChatRoomsRequestType,

export const fetchChatRooms = async (params: fetchChatRoomsRequestType) => {
  return publicRequest.get(`/chatrooms`, { params }).then(res => res.data)
}

export const createChatRoom = async (
  chatRoomRequestBody: chatRoomRequestBodyType | undefined,
) => {
  console.log(chatRoomRequestBody)
  return publicRequest
    .post(`/chatrooms`, chatRoomRequestBody)
    .then(res => res.data)
}
