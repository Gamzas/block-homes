import { useAtom } from 'jotai/index'
import { userAtom } from '@stores/atoms/userStore'
import { MessageType } from '@/types/components/chatType'
import * as m from '@components/ChattingPage/style/MessageItemStyle'

const MessageItem = ({ item }: { item: MessageType }) => {
  const { message, senderWalletAddress, chatNo, createdAt, messageType } = item
  const [user] = useAtom(userAtom)

  const extractTime = (date: string) => {
    if (Array.isArray(date)) {
      const pad = n => (n < 10 ? '0' + n : n)
      return `${pad(date[3])}:${pad(date[4])}`
    } else {
      console.log(date)
      const time = date.split('T')[1]
      const hour = time.split(':')[0]
      const minute = time.split(':')[1]
      return `${hour}:${minute}`
    }
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
