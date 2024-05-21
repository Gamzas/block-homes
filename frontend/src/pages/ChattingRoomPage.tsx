import * as c from '@pages/style/ChattingRoomPageStyle'
import Header from '@common/Header'
import SendMessageInput from '@components/ChattingPage/SendMessageInput'
import { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import {
  buyerStepAtom,
  sellerStepAtom,
  userAtom,
  userModeAtom,
  userStepAtom,
} from '@stores/atoms/userStore'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchChatRoomDetail } from '@apis/chatApi'
import { Client } from '@stomp/stompjs'
import MessageItem from '@components/ChattingPage/MessageItem'
import { API_BASE_URL } from '@constants/api'
import SockJS from 'sockjs-client'
import { MessageType } from '@/types/components/chatType'
import { chatRoomNoAtom, isGoNextStepAtom } from '@stores/atoms/chat'

const ChattingRoomPage = () => {
  const { chatRoomNo } = useParams()
  const [user] = useAtom(userAtom)
  const [chatRoomNumber, setChatRoomNumber] = useState(Number(chatRoomNo))
  const navigate = useNavigate()
  const [typeOfNumber, setTypeOfNumber] = useState('type')
  const [stringPrice, setStringPrice] = useState('')
  const [userMode, setUserMode] = useAtom(userModeAtom)
  const [sellerStep, setSellerStep] = useAtom(sellerStepAtom)
  const [buyerStep, setBuyerStep] = useAtom(buyerStepAtom)
  const [isGoNextStep, setIsGoNextStep] = useAtom(isGoNextStepAtom)
  const [userStep, setUserStep] = useAtom(userStepAtom)
  const [, setChatRoomNum] = useAtom(chatRoomNoAtom)

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
    const sockJs = SockJS(API_BASE_URL + '/ws/chat')
    client.current = new Client({
      webSocketFactory: () => sockJs,
      // debug: str => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('WebSocket connected')
        client.current.subscribe(
          `/exchange/chat.exchange/*.room.${chatRoomNo}`,
          msg => {
            console.log(
              'Subscribed to topic:',
              `/exchange/chat.exchange/*.room.${chatRoomNo}`,
            )
            console.log('Message received:', msg)
            try {
              const receivedMessage = JSON.parse(msg.body)
              console.log('Parsed message:', receivedMessage)
              setMessages(prevMessages => [
                ...prevMessages,
                {
                  chatNo: receivedMessage.chatNo,
                  chatRoomNo: receivedMessage.chatRoomNo,
                  senderWalletAddress: receivedMessage.senderWalletAddress,
                  senderName: receivedMessage.senderName,
                  messageType: receivedMessage.messageType,
                  image: receivedMessage.image,
                  contractStep: receivedMessage.contractStep,
                  message: receivedMessage.message,
                  createdAt: receivedMessage.createdAt,
                },
              ])
              setUserStep(receivedMessage.contractStep + 1)
            } catch (error) {
              console.error('Error parsing message:', error)
            }
          },
        )
      },
      onStompError: frame => console.log('STOMP Error:', frame.headers.message),
    })
    client.current.activate()
  }

  const formatPrice = price => {
    const units = ['원', '만', '억']
    let result = ''
    let unitIndex = 0

    while (price > 0) {
      const part = price % 10000
      if (part > 0) {
        result = part + units[unitIndex] + ' ' + result
      }
      price = Math.floor(price / 10000)
      unitIndex++
    }

    setStringPrice(result.trim())
  }

  useEffect(() => {
    if (chatRoomNo && user.walletAddress) {
      setChatRoomNumber(Number(chatRoomNo))
    }
  }, [chatRoomNo, user])

  const { data } = useQuery({
    queryKey: ['fetchChatRoomDetail', chatRoomNumber],
    queryFn: () => fetchChatRoomDetail(chatRoomNumber),
    enabled: !!chatRoomNumber,
  })

  useEffect(() => {
    if (data) {
      connectHandler()
    }
    return () => {
      client.current?.deactivate()
    }
  }, [data])

  useEffect(() => {
    if (data) {
      switch (data.transactionType) {
        case 0:
          setTypeOfNumber('매매')
          break
        case 1:
          setTypeOfNumber('전세')
          break
        case 2:
          setTypeOfNumber('월세')
          break
        default:
          setTypeOfNumber('type')
      }
      formatPrice(data.price)
    }
    setMessages(data?.chatList)

    if (data?.sellerWalletAddress === user.walletAddress) {
      setUserMode(2)
    } else {
      setUserMode(1)
    }

    setChatRoomNum(Number(chatRoomNo))
  }, [data])

  useEffect(() => {
    if (data?.chatList.length > 0) {
      setUserStep(data.chatList[data.chatList.length - 1].contractStep + 1)
    }
  }, [data, messages])

  const sendTextMessage = () => {
    if (newMessage.message.trim() !== '') {
      console.log('Sending message:', newMessage.message)
      client.current.publish({
        destination: `/pub/chat.talk.${chatRoomNo}`,
        body: JSON.stringify({
          senderWalletAddress: user.walletAddress,
          message: newMessage.message,
          imageBase64: null,
        }),
      })
      setNewMessage(defaultMessage)
    }
  }

  const sendInfoMessage = () => {
    let infoMessage = ''

    if (userStep - 1 === 0) {
      infoMessage = '임대(매도)인이 거래 시작 요청을 눌렀습니다.'
    } else if (userStep - 1 === 1) {
      infoMessage = '임차(매수)인이 거래 수락을 하였습니다.'
    } else if (userStep - 1 === 2) {
      infoMessage = '임대(매도)인이 특약 사항을 작성했습니다.'
    } else if (userStep - 1 === 3) {
      infoMessage = '임차(매수)인이 특약 사항을 작성했습니다.'
    } else if (userStep - 1 === 4) {
      infoMessage = '임대(매도)인이 계약서를 작성했습니다.'
    } else if (userStep - 1 === 5) {
      infoMessage = '임차(매수)인이 계약서 서명을 완료했습니다.'
    } else if (userStep - 1 === 6) {
      infoMessage = '거래가 완료되었습니다.'
    } else if (userStep - 1 === 7) {
      infoMessage = '거래가 완료되었습니다.'
    }

    if (newMessage) {
      client.current.publish({
        destination: `/pub/chat.progress.${chatRoomNo}`,
        body: JSON.stringify({
          senderWalletAddress: user.walletAddress,
          message: infoMessage,
          imageBase64: null,
        }),
      })
      console.log('Sending info:', newMessage.message)
      setNewMessage(defaultMessage)
      if (userMode === 1) {
        setSellerStep(sellerStep + 2)
      } else {
        setBuyerStep(buyerStep + 2)
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isGoNextStep) {
      setTimeout(sendInfoMessage, 1000)
      setIsGoNextStep(false)
    }
  }, [isGoNextStep])

  return (
    <c.ChattingRoomPageContainer>
      <Header title="채팅" isSearch={false} rightIconSrc="" />
      <c.ChattingHeader>
        <div className="image-container">
          <img src={data?.representativeImage} alt="매물 이미지" />
        </div>
        <c.RightContainer>
          <div className="address-container">{data?.realEstateAddress}</div>
          <div className="transaction-price">
            <div className="transaction-type-container">{typeOfNumber} </div>
            <div className="price-container">{stringPrice}</div>
          </div>

          <c.ButtonContainer>
            <button
              className="chatting-header-button"
              onClick={() => navigate(`/report/${data.itemNo}`)}
            >
              레포트
            </button>
            {userMode === 1 && (
              <button
                className="chatting-header-button"
                onClick={() => navigate(`/estate-checklist/${data.itemNo}`)}
              >
                체크리스트
              </button>
            )}
            <button
              className="chatting-header-button"
              onClick={() => navigate(`/transaction-progress/${data.itemNo}`)}
            >
              거래 현황 보러가기
            </button>
          </c.ButtonContainer>
        </c.RightContainer>
      </c.ChattingHeader>
      <c.MessageListContainer ref={scrollRef}>
        {messages?.length === 0 && <div>메세지를 보내 대화를 시작해보세요</div>}
        {messages?.map(message => (
          <MessageItem item={message} key={message.chatNo} />
        ))}
      </c.MessageListContainer>
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
