import * as s from '@components/ChattingPage/style/SendMessageInputStyle'
import React from 'react'
import { SendMessageInputPropsType } from '@/types/components/chatType'
// import MoreFunctionCollection from '@components/ChattingPage/MoreFunctionCollection'

const SendMessageInput = (SendMessageInputProps: SendMessageInputPropsType) => {
  const { sendButtonClick, message, onChange } = SendMessageInputProps
  // const [isShowMoreFunction, setIsShowMoreFunction] = useState(false)

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendButtonClick()
    }
  }

  // const clickIsShowMoreFunction = () => {
  //   setIsShowMoreFunction(!isShowMoreFunction)
  // }

  return (
    <s.SendMessageInputContainer>
      <s.SendMessageInputWrap>
        {/*<s.PlusButtonContainer*/}
        {/*  onClick={clickIsShowMoreFunction}*/}
        {/*  $isShowMoreFunction={isShowMoreFunction}*/}
        {/*>*/}
        {/*  <img*/}
        {/*    className="plus-button"*/}
        {/*    alt="더보기"*/}
        {/*    src="/icon/icon_plus_gray.png"*/}
        {/*  />*/}
        {/*</s.PlusButtonContainer>*/}
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
      {/*<s.MoreFunctionCollectionContainer*/}
      {/*  $isShowMoreFunction={isShowMoreFunction}*/}
      {/*>*/}
      {/*  <MoreFunctionCollection />*/}
      {/*</s.MoreFunctionCollectionContainer>*/}
    </s.SendMessageInputContainer>
  )
}

export default SendMessageInput
