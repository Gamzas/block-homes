import * as s from '@components/ChattingPage/style/SendMessageInputStyle'
import React, { useState } from 'react'
import { SendMessageInputPropsType } from '@/types/chatType'

const SendMessageInput = (SendMessageInputProps: SendMessageInputPropsType) => {
  const { sendButtonClick, message, onChange } = SendMessageInputProps
  const [isShowMoreFunction, setIsShowMoreFunction] = useState(false)

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendButtonClick()
    }
  }

  const clickIsShowMoreFunction = () => {
    setIsShowMoreFunction(!isShowMoreFunction)
  }

  return (
    <s.SendMessageInputContainer>
      <s.SendMessageInputWrap>
        <s.PlusButtonContainer onClick={clickIsShowMoreFunction}>
          <img
            className="plus-button"
            alt="더보기"
            src="/icon/icon_plus_gray.png"
          />
        </s.PlusButtonContainer>
        <input
          className="message-input"
          value={message}
          onKeyUp={handleKeyUp}
          onChange={onChange}
          placeholder="메시지 보내기"
        />
        <s.SendButtonContainer onClick={sendButtonClick}>
          <img
            className="send-button"
            src="/icon/icon_send_message.png"
            alt="보내기"
          />
        </s.SendButtonContainer>
      </s.SendMessageInputWrap>
    </s.SendMessageInputContainer>
  )
}

export default SendMessageInput
