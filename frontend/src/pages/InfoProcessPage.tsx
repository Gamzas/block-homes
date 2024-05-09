import React from 'react'
import InfoPageHeader from '@common/InfoPageHeader'

const InfoProcessPage = () => {
  const infoHeaderProps = {
    backgroundImageSrc: '/public/image/image_info_certification.png',
    questionTitle:
      '블록홈즈에서는 <span className="highlight-text">어떤 과정</span>을 거쳐 집을 거래 할까요?',
  }
  return (
    <div>
      <InfoPageHeader {...infoHeaderProps} />
    </div>
  )
}

export default InfoProcessPage
