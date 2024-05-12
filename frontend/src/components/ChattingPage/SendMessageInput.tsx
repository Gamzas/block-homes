import React from 'react'
import * as s from '@components/ChattingPage/style/SendMessageInputStyle'
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
