import ChatPreviewComponent from '@components/ChatListPage/ChatPreviewComponent'

const ChatList = () => {
  const chatRoomDatas = [
    {
      representativeImage:
        'https://i0.wp.com/www.gangnamapt.com/wp-content/uploads/2023/01/20230105_180953_HDR.jpg?resize=480%2C360',
      address: '광주광역시 광산구 남동길',
      transactionType: 1,
      price: 300000000,
      lastChat: '집 상태 좋아요',
      dangerType: 'good',
      chatRoomNum: 1,
    },
    {
      representativeImage:
        'https://i0.wp.com/www.gangnamapt.com/wp-content/uploads/2023/01/20230105_180953_HDR.jpg?resize=480%2C360',
      address: '광주광역시 광산구 남동길',
      transactionType: 1,
      price: 300000000,
      lastChat: '집 상태 좋아요',
      dangerType: 'normal',
      chatRoomNum: 2,
    },
  ]

  return (
    <>
      {chatRoomDatas.map(chatData => (
        <ChatPreviewComponent {...chatData} />
      ))}
    </>
  )
}

export default ChatList
