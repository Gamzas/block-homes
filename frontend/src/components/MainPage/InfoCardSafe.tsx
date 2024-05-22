import React from 'react'
import * as i from '@components/MainPage/style/InfoCardStyle'
import { useNavigate } from 'react-router-dom'

const InfoCardSafe = () => {
  const navigate = useNavigate()

  const navigateInfoPage = () => {
    navigate('/info-how-safe')
  }

  return (
    <i.InfoCardContainer $backgroundColor="#F3F0F7">
      <div className="image-container">
        <img
          alt="자물쇠"
          src="/image/image_info_safe.png"
          className="left-image"
        />
      </div>

      <i.InfoContainer>
        <div className="info-text">블록홈즈는 어떻게</div>
        <div className="info-text">
          <span className="highlight-text">허위 매물</span>과
          <span className="highlight-text">전세 사기</span>
        </div>
        <div className="info-text">방지할까요?</div>
        <i.NavigateButtonContainer onClick={navigateInfoPage}>
          <div className="button-title">블록홈즈 기술 살펴보기</div>
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

export default InfoCardSafe
