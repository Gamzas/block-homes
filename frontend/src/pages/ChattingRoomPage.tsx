import * as c from '@pages/style/ChattingRoomPageStyle'
import Header from '@common/Header'
import SendMessageInput from '@components/ChattingPage/SendMessageInput'
import { useRef } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useParams } from 'react-router-dom'
import { MessageType } from '@/types/chatType'

const ChattingRoomPage = () => {
  const { chatNo } = useParams()
  const [user] = useAtom(userAtom)

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }
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
