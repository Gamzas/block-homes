import * as c from '@pages/style/ChattingRoomPageStyle'
import Header from '@common/Header'
import SendMessageInput from '@components/ChattingPage/SendMessageInput'

const ChattingRoomPage = () => {
  return (
    <c.ChattingRoomPageContainer>
      <Header
        title="채팅"
        isSearch={false}
        rightIconSrc="/icon/icon_safety_card_report.png"
      />
      <SendMessageInput />
    </c.ChattingRoomPageContainer>
  )
}

export default ChattingRoomPage
