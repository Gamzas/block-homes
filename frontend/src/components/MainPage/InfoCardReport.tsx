import React from 'react'
import * as i from '@components/MainPage/style/InfoCardStyle'
import { useNavigate } from 'react-router-dom'

const InfoCardReport = () => {
  const navigate = useNavigate()

  const navigateInfoPage = () => {
    navigate('/info-transaction-process')
  }

  return (
    <i.InfoCardContainer $backgroundColor="#F7F0F0">
      <div className="image-container">
        <img
          alt="증명서"
          src="/image/image_info_certification.png"
          className="left-image"
        />
      </div>

      <i.InfoContainer>
        <div className="info-text">
          블록홈즈에서는 <span className="highlight-text">어떤 과정</span>을
          거쳐
        </div>
        <div className="info-text">집을 거래할까요?</div>
        <i.NavigateButtonContainer onClick={navigateInfoPage}>
          <div className="button-title">블록홈즈 거래 과정 보기</div>
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
