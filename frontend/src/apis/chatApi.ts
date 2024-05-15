import { publicRequest } from '@hooks/requestMethods'

export const fetchChatRooms = async (userWalletAddress: string) => {
  return publicRequest
    .get(`/chatrooms?type=userWalletAddress&value=${userWalletAddress}`)
    .then(res => res.data)
}
