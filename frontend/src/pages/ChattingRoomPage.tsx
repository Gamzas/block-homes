import * as c from '@pages/style/ChattingRoomPageStyle'
import Header from '@common/Header'
import SendMessageInput from '@components/ChattingPage/SendMessageInput'
import { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useNavigate, useParams } from 'react-router-dom'
import { MessageType } from '@/types/components/chatType'
import { useQuery } from '@tanstack/react-query'
import { fetchChatRoomDetail } from '@apis/chatApi'
import { Client } from '@stomp/stompjs'
import MessageItem from '@components/ChattingPage/MessageItem'
import { API_BASE_URL } from '@constants/api'
import SockJS from 'sockjs-client'

const ChattingRoomPage = () => {
  const { chatRoomNo } = useParams()
  const [user] = useAtom(userAtom)
  const [chatRoomNumber, setChatRoomNumber] = useState(Number(chatRoomNo))
  const navigate = useNavigate()

  const defaultMessage = {
    chatNo: 0,
    chatRoomNo: 0,
    senderWalletAddress: user.walletAddress,
    senderName: user.name,
    messageType: 0,
    image: '',
    contractStep: 0,
    message: '',
    createdAt: '',
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

  const connectHandler = () => {
    const SockJs = SockJS(API_BASE_URL + '/ws/chat')
    client.current = new Client({
      webSocketFactory: () => SockJs,
      debug: str => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        client.current?.subscribe(`/pub/chat.talk.${chatRoomNo}`, msg => {
          const receivedMessage = JSON.parse(msg.body)
          setMessages(prevMessages => [
            ...prevMessages,
            {
              chatNo: receivedMessage.chatNo,
              chatRoomNo: 0,
              senderWalletAddress: receivedMessage.senderWalletAddress,
              senderName: user.name,
              messageType: receivedMessage.messageType,
              image: '',
              contractStep: receivedMessage.contractStep,
              message: receivedMessage.message,
              createdAt: receivedMessage.createdAt,
            },
          ])
          scrollToBottom()
        })
      },
      onStompError: frame => console.log(frame.headers.message),
    })
    client.current?.activate()
  }

  useEffect(() => {
    if (chatRoomNo && user.walletAddress) {
      setChatRoomNumber(Number(chatRoomNo))
    }
  }, [chatRoomNo, user])

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['fetchChatRoomDetail', chatRoomNumber],
    queryFn: () => fetchChatRoomDetail(chatRoomNumber),
  })

  useEffect(() => {
    connectHandler()
    return () => {
      client.current?.deactivate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

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

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <c.ChattingRoomPageContainer>
      <Header
        title="채팅"
        isSearch={false}
        rightIconSrc="/icon/icon_safety_card_report.png"
      />
      <c.ChattingHeader>
        매물 정보
        {/*<div>{data.representativeImage}</div>*/}
        {/*<div>{data.realEstateAddress}</div>*/}
        {/*<div>{data.transactionType}</div>*/}
        {/*<div>{data.price}</div>*/}
        <c.ButtonContainer>
          <button
            className="chatting-header-button"
            onClick={() => navigate(`/report/${data.itemNo}`)}
          >
            레포트
          </button>
          <button
            className="chatting-header-button"
            onClick={() => navigate('/estate-checklist')}
          >
            체크리스트
          </button>
          <button
            className="chatting-header-button"
            onClick={() => navigate('/transaction-progress')}
          >
            거래 현황 보러가기
          </button>
        </c.ButtonContainer>
      </c.ChattingHeader>
      <c.MessageList>
        {messages.length === 0 && <div>메세지를 보내 대화를 시작해보세요</div>}
        {messages.map(message => (
          <MessageItem item={message} key={message.chatNo} />
        ))}
      </c.MessageList>
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
