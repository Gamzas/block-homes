import * as n from '@common/style/NoItemsStyle'
import { useNavigate } from 'react-router-dom'

const NoItems = ({ alarmText }) => {
  const navigate = useNavigate()

  const goEstate = () => {
    navigate('/estate')
  }

  return (
    <n.NoItemContainer>
      <n.ImageContainer>
        <img src="/image/image_sad_pig.png" alt="슬픈 돼지" />
      </n.ImageContainer>
      <n.ContentContainer>
        <div className="alarm-text">{alarmText}</div>
        <n.BtnContainer onClick={goEstate}>
          <div className="title">매물 구경하러 가기</div>
        </n.BtnContainer>
      </n.ContentContainer>
    </n.NoItemContainer>
  )
}

export default NoItems
