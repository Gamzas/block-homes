import * as c from '@pages/style/ChatPageStyle'
import Footer from '@common/Footer'
import ChatList from '@components/ChatListPage/ChatList'
import Header from '@common/Header'

const ChatListPage = () => {
  return (
    <c.ChatPageContainer>
      <Header title="채팅 목록" isSearch={false} rightIconSrc="" />
      <ChatList />
      <Footer />
    </c.ChatPageContainer>
  )
}

export default ChatListPage
