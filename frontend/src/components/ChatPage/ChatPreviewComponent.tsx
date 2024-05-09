import * as c from '@components/ChatPage/style/ChatPreviewComponentStyle'
import React, { useEffect, useState } from 'react'
import { ChatComponentProps } from '@/types/components/chatType'

const ChatPreviewComponent: React.FC<ChatComponentProps> = ({
  representativeImage,
  address,
  transactionType,
  price,
  lastChat,
  dangerType,
}) => {
  const [typeOfNumber, setTypeOfNumber] = useState('type')
  const [stringPrice, setStringPrice] = useState('')

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

  return (
    <c.ChatComponentContainer>
      <img className="estate-image" alt="매물 사진" src={representativeImage} />
      <c.ChatComponentRightContainer>
        <div className="address">{address}</div>
        <div className="type">{typeOfNumber}</div>
        <div className="price">{stringPrice} 원</div>
        <div className="last-chat">{lastChat}</div>
        <div>{dangerType}</div>
      </c.ChatComponentRightContainer>
    </c.ChatComponentContainer>
  )
}

export default ChatPreviewComponent
