import React from 'react'
import InfoPageHeader from '@common/InfoPageHeader'

const InfoSafePage = () => {
  const infoHeaderProps = {
    backgroundImageSrc: '/public/image/image_info_safe.png',
    questionTitle:
      '블록홈즈는 어떻게 <span className="highlight-text"> 허위 매물</span>과 <span className="highlight-text"> 전세 사기</span>를 방지할까요? ',
  }
  return (
    <div>
      <InfoPageHeader {...infoHeaderProps} />
    </div>
  )
}

export default InfoSafePage
