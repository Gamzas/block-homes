import ChatPreviewComponent from '@components/ChatListPage/ChatPreviewComponent'
import { userAtom, userTypeAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import {
  ChatRoomListType,
  fetchChatRoomsRequestType,
} from '@/types/components/chatRoomType'
import { fetchChatRooms } from '@apis/chatApi'
import NoItems from '@common/NoItems'
import { useEffect, useState } from 'react'
import * as c from '@components/ChatListPage/style/ChatListStyle'

const ChatList = () => {
  const [user] = useAtom(userAtom)
  const [userType] = useAtom(userTypeAtom)
  const [chatRoomRequestData, setChatRoomRequestData] =
    useState<fetchChatRoomsRequestType>()

  useEffect(() => {
    setChatRoomRequestData({
      mode: userType.type + 1,
      walletAddress: user.walletAddress,
    })
  }, [userType, user])

  const { data, isLoading } = useQuery<ChatRoomListType[]>({
    queryKey: ['fetchChatRooms', chatRoomRequestData],
    queryFn: () =>
      chatRoomRequestData.walletAddress !== '' &&
      fetchChatRooms(chatRoomRequestData),
  })

  return (
    <c.ChatListContainer>
      {data && data.length === 0 ? (
        <NoItems
          src={'image/image_sad_pig.png'}
          alarmText={'현재 진행중인 채팅방이 없어요.'}
        />
      ) : (
        data.map(ChatRoomData => <ChatPreviewComponent {...ChatRoomData} />)
      )}
    </c.ChatListContainer>
  )
}

export default ChatList
