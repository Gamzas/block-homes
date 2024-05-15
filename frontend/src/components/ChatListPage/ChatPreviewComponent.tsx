import * as c from '@components/ChatListPage/style/ChatPreviewComponentStyle'
import React, { useEffect, useState } from 'react'
import { ChatComponentProps } from '@/types/components/chatRoomType'
import { useNavigate } from 'react-router-dom'
import useEstateCondition from '@hooks/useEstateCondition'

const ChatPreviewComponent: React.FC<ChatComponentProps> = ({
  representativeImage,
  address,
  transactionType,
  price,
  lastChat,
  dangerType,
  chatRoomNum,
}) => {
  const [typeOfNumber, setTypeOfNumber] = useState('type')
  const [stringPrice, setStringPrice] = useState('')
  const navigate = useNavigate()
  const { getColor } = useEstateCondition(dangerType)
  const fourthColor = getColor()?.fourth

  const formatPrice = (price: number) => {
    const units = ['원', '만', '억']
    let result = ''
    let unitIndex = 0

    while (price > 0) {
      const part = price % 10000
      if (part > 0) {
        result = part + units[unitIndex] + ' ' + result // 각 단위마다 값을 추가
      }
      price = Math.floor(price / 10000)
      unitIndex++
    }

    setStringPrice(result.trim()) // 마지막 공백 제거
  }

  useEffect(() => {
    switch (transactionType) {
      case 0:
        setTypeOfNumber('매매')
        break
      case 1:
        setTypeOfNumber('전세')
        break
      case 2:
        setTypeOfNumber('월세')
        break
    }

    formatPrice(price)
  }, [transactionType, price])

  const handleClick = () => {
    navigate(`/chat/${chatRoomNum}`)
  }

  return (
    <c.ChatPreviewComponentContainer onClick={handleClick} $color={fourthColor}>
      <div className="image-container">
        <img
          className="estate-image"
          alt="매물 사진"
          src={representativeImage}
        />
      </div>

      <c.ChatComponentRightContainer>
        <div className="address">{address}</div>

        <div className="price">
          <img src="/icon/icon_chat_preview_coin.png" alt="돈" />
          <div className="type">{typeOfNumber}</div>
          &nbsp;{stringPrice} 원
        </div>
        <div className="last-chat">
          <img src="/icon/icon_chat_preview_message.png" alt="채팅" />
          {lastChat}
        </div>
      </c.ChatComponentRightContainer>
    </c.ChatPreviewComponentContainer>
  )
}

export default ChatPreviewComponent
