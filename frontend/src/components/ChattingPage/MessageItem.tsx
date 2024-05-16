import { useAtom } from 'jotai/index'
import { userAtom } from '@stores/atoms/userStore'
import { MessageType } from '@/types/components/chatType'
import * as m from '@components/ChattingPage/style/MessageItemStyle'

const MessageItem = ({ item }: { item: MessageType }) => {
  const { message, senderWalletAddress, chatNo, createdAt, messageType } = item
  const [user] = useAtom(userAtom)

  const extractTime = (date: string) => {
    if (!date) {
      const currentDate = new Date()
      const hour = currentDate.getHours().toString().padStart(2, '0') // 시
      const minute = currentDate.getMinutes().toString().padStart(2, '0') // 분
      return `${hour}:${minute}`
    }
    const time = date.split(' ')[1]
    const [hour, minute] = time.split(':')
    return `${hour}:${minute}`
  }

  return (
    <m.MessageItemContainer key={chatNo}>
      <m.MessageItemWrap $me={senderWalletAddress === user.walletAddress}>
        {messageType === 3 ? (
          <m.NoticeMessageBoxWrap>
            <b>[안내]</b>
            {message}
          </m.NoticeMessageBoxWrap>
        ) : (
          <>
            <m.MessageBox $me={senderWalletAddress === user.walletAddress}>
              {message}
            </m.MessageBox>
            <span>{extractTime(createdAt)}</span>
          </>
        )}
      </m.MessageItemWrap>
    </m.MessageItemContainer>
  )
}

export default MessageItem
