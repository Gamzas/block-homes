import * as f from '@components/EstateDetailPage/style/DetailFooterStyle'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { chatRoomRequestDataType } from '@/types/components/chatRoomType'
import { userAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'
import { checkChatRoomExistence, createChatRoom } from '@apis/chatApi'

const DetailFooter = () => {
  const { realEstateNo } = useParams()
  const [user] = useAtom(userAtom)
  const [isLiked, setIsLiked] = useState(false)
  const navigate = useNavigate()
  const [chatRoomRequestData, setChatRoomRequestData] =
    useState<chatRoomRequestDataType>()

  useEffect(() => {
    setChatRoomRequestData({
      itemNo: Number(realEstateNo),
      userWalletAddress: user.walletAddress,
    })
  }, [realEstateNo, user])

  const handleBtnClick = async () => {
    try {
      const checkChatRoomResponse =
        await checkChatRoomExistence(chatRoomRequestData)
      if (checkChatRoomResponse.status === 404) {
        const createChatRoomResult = await createChatRoom(chatRoomRequestData)
        if (createChatRoomResult && createChatRoomResult.chatRoomNo) {
          navigate(`/chat/${createChatRoomResult.chatRoomNo}`)
        }
      } else if (
        checkChatRoomResponse.data &&
        checkChatRoomResponse.data.chatRoomNo
      ) {
        navigate(`/chat/${checkChatRoomResponse.data.chatRoomNo}`)
      }
    } catch (error) {
      console.error('Error checking or creating chat room:', error)
    }
  }

  return (
    <f.FooterContainer>
      <f.LikendBtn onClick={() => setIsLiked(!isLiked)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          viewBox="0 0 14 20"
          fill="none"
        >
          <path
            d={
              isLiked
                ? 'M13 0H1C0.4 0 0 0.4 0 1V19C0 19.2 0.0999998 19.5 0.2 19.6C0.6 20 1.2 20.1 1.6 19.7L6.9 15.2L12.2 19.6C12.4 19.8 12.6 19.9 12.9 19.9C13.5 19.9 13.9 19.5 13.9 18.9V1C14 0.4 13.6 0 13 0Z'
                : 'M13.5 1.12355e-07H0.49939C0.22345 0.000183212 -0.000182988 0.223999 1.12355e-07 0.5V19.5C0.00213631 19.6942 0.117371 19.8694 0.294922 19.9482C0.474121 20.0276 0.682862 19.9981 0.833008 19.8721L7 14.6553L13.1465 19.8535C13.2402 19.9473 13.3674 20 13.5 20C13.7761 20 14 19.7761 14 19.5V0.49939C13.9998 0.22345 13.776 -0.000182988 13.5 1.12355e-07ZM13 18.4209L7.32324 13.6182C7.13678 13.46 6.86322 13.46 6.67676 13.6182L1 18.4229V1H13V18.4209Z'
            }
            fill="#845BD3"
          />
        </svg>
      </f.LikendBtn>
      <f.InfoContainer>
        <div className="price">
          전세 3억&nbsp;
          <span className="maintenance">관리비 10</span>
        </div>
        <div className="location">광주광역시 광산구 장덕동</div>
      </f.InfoContainer>
      <f.ChatBtn onClick={handleBtnClick}>
        <div className="name">채팅하기</div>
      </f.ChatBtn>
    </f.FooterContainer>
  )
}

export default DetailFooter
