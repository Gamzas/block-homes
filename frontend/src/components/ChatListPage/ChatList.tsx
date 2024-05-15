import ChatPreviewComponent from '@components/ChatListPage/ChatPreviewComponent'
import { userAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import { ChatRoomListType } from '@/types/components/chatRoomType'
import { fetchChatRooms } from '@apis/chatApi'
import NoItems from '@components/FavoriteItemsPage/NoItems'

const ChatList = () => {
  const [user] = useAtom(userAtom)

  const { data, isLoading } = useQuery<ChatRoomListType[]>({
    queryKey: ['fetchChatRooms', user.walletAddress],
    queryFn: () => fetchChatRooms(user.walletAddress),
  })

  const chatRoomDatas = [
    // {
    //   representativeImage:
    //     'https://i0.wp.com/www.gangnamapt.com/wp-content/uploads/2023/01/20230105_180953_HDR.jpg?resize=480%2C360',
    //   address: '광주광역시 광산구 남동길',
    //   transactionType: 1,
    //   price: 300000000,
    //   lastChat: '집 상태 좋아요',
    //   dangerType: 'good',
    //   chatRoomNum: 1,
    // },
    // {
    //   representativeImage:
    //     'https://i0.wp.com/www.gangnamapt.com/wp-content/uploads/2023/01/20230105_180953_HDR.jpg?resize=480%2C360',
    //   address: '광주광역시 광산구 남동길',
    //   transactionType: 1,
    //   price: 300000000,
    //   lastChat: '집 상태 좋아요',
    //   dangerType: 'normal',
    //   chatRoomNum: 2,
    // },
  ]

  return (
    <>
      {chatRoomDatas && chatRoomDatas.length === 0 ? (
        <NoItems alarmText={'현재 진행중인 채팅방이 없어요.'} />
      ) : (
        chatRoomDatas.map(chatData => <ChatPreviewComponent {...chatData} />)
      )}
    </>
  )
}

export default ChatList
