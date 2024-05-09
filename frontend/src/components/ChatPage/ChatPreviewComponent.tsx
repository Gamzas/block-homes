import * as c from '@components/ChatPage/style/ChatPreviewComponentStyle'
import React, { useEffect, useState } from 'react'

interface ChatComponentProps {
  representativeImage: string
  address: string
  type: number
  price: number
  lastChat: string
}

const ChatPreviewComponent: React.FC<ChatComponentProps> = ({
  representativeImage,
  address,
  type,
  price,
  lastChat,
}) => {
  const [typeOfNumber, setTypeOfNumber] = useState('type')

  useEffect(() => {
    switch (type) {
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
  }, [price])

  return (
    <c.ChatComponentContainer>
      <img className="estate-image" alt="매물 사진" src={representativeImage} />
      <c.ChatComponentRightContainer>
        <div className="address">{address}</div>
        <div className="type">{typeOfNumber}</div>
        <div className="price">{price} 원</div>
        <div className="last-chat">{lastChat}</div>
      </c.ChatComponentRightContainer>
    </c.ChatComponentContainer>
  )
}

export default ChatPreviewComponent
