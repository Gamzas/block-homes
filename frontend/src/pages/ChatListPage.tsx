import * as c from '@pages/style/ChatPageStyle'
import Footer from '@common/Footer'
import ChatList from '@components/ChatPage/ChatList'

const ChatListPage = () => {
  return (
    <c.ChatPageContainer>
      <ChatList />
      <Footer />
    </c.ChatPageContainer>
  )
}

export default ChatListPage
