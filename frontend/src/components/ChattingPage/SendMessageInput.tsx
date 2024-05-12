import React from 'react'
import * as s from '@components/ChattingPage/style/SendMessageInputStyle'

const SendMessageInput = () => {
  return (
    <s.SendMessageInputContainer>
      <s.SendMessageInputWrap>
        <s.PlusButtonContainer>
          <img
            className="plus-button"
            alt="더보기"
            src="/icon/icon_plus_gray.png"
          />
        </s.PlusButtonContainer>
        <input className="message-input" placeholder="메시지 보내기" />
        <s.SendButtonContainer>
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
