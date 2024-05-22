import { userAtom, userTypeAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import {
  ChatRoomListType,
  FetchChatRoomsRequestType,
} from '@/types/components/chatRoomType'
import { fetchChatRooms } from '@apis/chatApi'
import { useEffect, useState } from 'react'
import * as c from '@components/ChatListPage/style/ChatListStyle'
import NoItems from '@common/NoItems'
import ChatPreviewComponent from '@components/ChatListPage/ChatPreviewComponent'
import UserTypeToggle from '@common/UserTypeToggle'

const ChatList = () => {
  const [user] = useAtom(userAtom)
  const [userType] = useAtom(userTypeAtom)
  const [chatRoomRequestData, setChatRoomRequestData] =
    useState<FetchChatRoomsRequestType | null>(null)

  useEffect(() => {
    if (user.walletAddress) {
      setChatRoomRequestData({
        mode: userType.type + 1,
        walletAddress: user.walletAddress,
      })
    }
  }, [userType, user])

  const { data } = useQuery<ChatRoomListType[]>({
    queryKey: ['fetchChatRooms', chatRoomRequestData],
    queryFn: () => fetchChatRooms(chatRoomRequestData!),
    enabled: !!chatRoomRequestData,
  })

  if (data && data.length === 0) {
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
      {data &&
        data.map(ChatRoomData => (
          <ChatPreviewComponent
            key={ChatRoomData.chatRoomNo}
            {...ChatRoomData}
          />
        ))}
    </c.ChatListContainer>
  )
}

export default ChatList
