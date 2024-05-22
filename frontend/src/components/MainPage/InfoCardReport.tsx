import * as i from '@components/MainPage/style/InfoCardStyle'
import { useNavigate } from 'react-router-dom'

const InfoCardReport = () => {
  const navigate = useNavigate()
  const handleGoReport = () => {
    navigate('/info-report')
  }

  return (
    <i.InfoCardContainer $backgroundColor="#F7F7F0">
      <div className="image-container">
        <img
          alt="증명서"
          src="/image/image_info_report.png"
          className="left-image"
        />
      </div>

      <i.InfoContainer>
        <div className="info-text">
          블록홈즈에는 매물에 대한{' '}
          <span className="highlight-text"> 레포트</span>가
        </div>
        <div className="info-text">작성되어 있어요.</div>
        <i.NavigateButtonContainer>
          <div className="button-title" onClick={handleGoReport}>
            매물 레포트 알아보기
          </div>
          <img
            alt="이동 아이콘"
            className="double-right-arrows"
            src="/icon/icon_double_right_arrow.png"
          />
        </i.NavigateButtonContainer>
      </i.InfoContainer>
    </i.InfoCardContainer>
  )
}

export default InfoCardReport
