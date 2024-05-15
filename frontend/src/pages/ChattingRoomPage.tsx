import * as c from '@pages/style/ChattingRoomPageStyle'
import Header from '@common/Header'
import SendMessageInput from '@components/ChattingPage/SendMessageInput'
import { useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useParams } from 'react-router-dom'
import { MessageType } from '@/types/components/chatType'
import { useQuery } from '@tanstack/react-query'
import { fetchChatRoomDetail } from '@apis/chatApi'

const ChattingRoomPage = () => {
  const { chatNo } = useParams()
  const [user] = useAtom(userAtom)

  const defaultMessage = {
    chatNo: 0,
    createdAt: '',
    isRead: false,
    message: '',
    type: null,
    userImage: null,
    userName: user.name,
    userWalletAddress: user.walletAddress,
  }

  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState<MessageType>(defaultMessage)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['fetchChatRoomDetail', chatRoomNo],
    queryFn: () => fetchChatRoomDetail(Number(chatRoomNo)),
  })


  const sendTextMessage = () => {
    if (newMessage.message.trim() !== '') {
      client.current!.publish({
        destination: `/sub/chat.talk.${chatRoomNo}`,
        body: JSON.stringify({
          chatRoomNo: chatRoomNo,
          senderWalletAddress: user.walletAddress,
          message: newMessage.message,
          type: 2,
        }),
      })
      setNewMessage(defaultMessage)
      scrollToBottom()
    }
  }

  return (
    <c.ChattingRoomPageContainer>
      <Header
        title="채팅"
        isSearch={false}
        rightIconSrc="/icon/icon_safety_card_report.png"
      />
      <SendMessageInput
        sendButtonClick={sendTextMessage}
        message={newMessage.message}
        onChange={e =>
          setNewMessage(prev => ({ ...prev, message: e.target.value }))
        }
      />
    </c.ChattingRoomPageContainer>
  )
}

export default ChattingRoomPage
