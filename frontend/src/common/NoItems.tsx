import { userTypeAtom } from '@/stores/atoms/userStore'
import * as n from '@common/style/NoItemsStyle'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

const NoItems = ({ src, alarmText }) => {
  const navigate = useNavigate()
  const setUserType = useSetAtom(userTypeAtom)
  console.log(src === '/image/image_sad_pig.png')
  const goEstate = () => {
    setUserType({ type: 0 })
    navigate(`/`)
  }

  return (
    <n.NoItemContainer>
      <n.ImageContainer>
        <img src={src} alt="슬픈 돼지" />
      </n.ImageContainer>
      <n.ContentContainer>
        <div className="alarm-text">{alarmText}</div>
        {src !== 'image/image_warning_pig.png' && (
          <n.BtnContainer onClick={goEstate}>
            <div className="title">다른 매물 구경하러 가기</div>
          </n.BtnContainer>
        )}
      </n.ContentContainer>
    </n.NoItemContainer>
  )
}

export default NoItems
