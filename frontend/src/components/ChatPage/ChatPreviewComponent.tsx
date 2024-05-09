import * as c from '@components/ChatPage/style/ChatPreviewComponentStyle'
import React from 'react'

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
  return (
    <c.ChatComponentContainer>
      <img className="estate-image" alt="매물 사진" src={representativeImage} />
      <c.ChatComponentRightContainer>
        <div className="address">{address}</div>
        <div className="type">{type}</div>
        <div className="price">{price} 원</div>
        <div className="last-chat">{lastChat}</div>
      </c.ChatComponentRightContainer>
    </c.ChatComponentContainer>
  )
}

export default ChatPreviewComponent
