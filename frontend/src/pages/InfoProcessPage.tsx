import React from 'react'
import InfoPageHeader from '@common/InfoPageHeader'
import * as i from '@pages/style/InfoProcessPageStyle'
import InfoProcessContent from '@components/InfoPage/InfoProcessContent'

const InfoProcessPage = () => {
  const infoHeaderProps = {
    backgroundImageSrc: '/image/image_info_certification.png',
    questionTitle:
      '블록홈즈에서는 <span class="highlight-text">어떤 과정</span>을 거쳐 집을 거래 할까요?',
  }
  return (
    <i.InfoProcessPageContainer>
      <InfoPageHeader {...infoHeaderProps} />
      <InfoProcessContent />
    </i.InfoProcessPageContainer>
  )
}

export default InfoProcessPage
