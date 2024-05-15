import * as n from '@common/style/NoItemsStyle'
import { useNavigate } from 'react-router-dom'

const NoItems = ({ src, alarmText }) => {
  const navigate = useNavigate()
  console.log(src === '/image/image_sad_pig.png')
  const goEstate = () => {
    navigate('/estate')
  }

  return (
    <n.NoItemContainer>
      <n.ImageContainer $isSad={src === 'image/image_sad_pig.png'}>
        <img src={src} alt="슬픈 돼지" />
      </n.ImageContainer>
      <n.ContentContainer>
        <div className="alarm-text">{alarmText}</div>
        {src !== 'image/image_warning_pig.png' && (
          <n.BtnContainer onClick={goEstate}>
            <div className="title">매물 구경하러 가기</div>
          </n.BtnContainer>
        )}
      </n.ContentContainer>
    </n.NoItemContainer>
  )
}

export default NoItems
