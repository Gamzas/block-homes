import * as c from '@pages/style/ChattingRoomPageStyle'
import Header from '@common/Header'
import SendMessageInput from '@components/ChattingPage/SendMessageInput'
import { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useParams } from 'react-router-dom'
import { MessageType } from '@/types/components/chatType'
import { useQuery } from '@tanstack/react-query'
import { fetchChatRoomDetail } from '@apis/chatApi'
import { Client } from '@stomp/stompjs'

const ChattingRoomPage = () => {
  const { chatRoomNo } = useParams()
  const [user] = useAtom(userAtom)
  const [chatRoomNumber, setChatRoomNumber] = useState(Number(chatRoomNo))

  const defaultMessage = {
    chatNo: 0,
    chatRoomNo: 0,
    senderWalletAddress: user.walletAddress,
    senderName: user.name,
    messageType: 0,
    image: '',
    contractStep: 0,
    message: '',
  }

  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState<MessageType>(defaultMessage)
  const scrollRef = useRef<HTMLDivElement>(null)
  const client = useRef<Client | null>(null)
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  useEffect(() => {
    if (chatRoomNo && user.walletAddress) {
      setChatRoomNumber(chatRoomNumber)
    }
  }, [chatRoomNo, user])

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['fetchChatRoomDetail', chatRoomNumber],
    queryFn: () => fetchChatRoomDetail(chatRoomNumber),
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
      <c.ChattingHeader>
        매물 정보
        <div>{data.representativeImage}</div>
        <div>{data.realEstateAddress}</div>
        <div>{data.transactionType}</div>
        <div>{data.price}</div>
        <button>매물 레포트 보러가기</button>
        <button>매물 체크리스트 보러가기</button>
        <button>매물 거래 현황 보러가기</button>
      </c.ChattingHeader>
      ㄴ
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
