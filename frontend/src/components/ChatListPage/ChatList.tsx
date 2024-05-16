import { userAtom, userTypeAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import {
  ChatRoomListType,
  fetchChatRoomsRequestType,
} from '@/types/components/chatRoomType'
import { fetchChatRooms } from '@apis/chatApi'
import { useEffect, useState } from 'react'
import * as c from '@components/ChatListPage/style/ChatListStyle'
import NoItems from '@common/NoItems'
import ChatPreviewComponent from '@components/ChatListPage/ChatPreviewComponent'

const ChatList = () => {
  const [user] = useAtom(userAtom)
  const [userType] = useAtom(userTypeAtom)
  const [chatRoomRequestData, setChatRoomRequestData] =
    useState<fetchChatRoomsRequestType | null>(null)

  useEffect(() => {
    if (user.walletAddress) {
      setChatRoomRequestData({
        mode: userType.type + 1,
        walletAddress: user.walletAddress,
      })
    }
  }, [userType, user])

  const { data, isLoading } = useQuery<ChatRoomListType[]>({
    queryKey: ['fetchChatRooms', chatRoomRequestData],
    queryFn: () =>
      chatRoomRequestData.walletAddress !== '' &&
      fetchChatRooms(chatRoomRequestData),
  })

  if (!Array.isArray(data)) {
    return (
      <c.ChatListContainer>
        <NoItems
          src={'image/image_sad_pig.png'}
          alarmText={'현재 진행중인 채팅방이 없어요.'}
        />
        <UserTypeToggle />
      </c.ChatListContainer>
    )
  }

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
