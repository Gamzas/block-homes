import { publicRequest } from '@hooks/requestMethods'
import {
  ChatRoomCheckResponseType,
  chatRoomRequestDataType,
  fetchChatRoomsRequestType,
} from '@/types/components/chatRoomType'

export const fetchChatRooms = async (params: fetchChatRoomsRequestType) => {
  return publicRequest.get(`/chatrooms`, { params }).then(res => res.data)
}

export const checkChatRoomExistence = async (
  params: chatRoomRequestDataType,
): Promise<ChatRoomCheckResponseType> => {
  try {
    const response = await publicRequest.get(`/chatrooms/check`, { params })
    return response
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { status: 404 }
    }
    throw error
  }
}

export const createChatRoom = async (
  chatRoomRequestBody: chatRoomRequestDataType,
) => {
  console.log(chatRoomRequestBody)
  return publicRequest
    .post(`/chatrooms`, chatRoomRequestBody)
    .then(res => res.data)
}

export const fetchChatRoomDetail = async (chatRoomNo: number) => {
  return publicRequest.get(`/chatrooms/${chatRoomNo}`).then(res => {
    return res.data
  })
}
