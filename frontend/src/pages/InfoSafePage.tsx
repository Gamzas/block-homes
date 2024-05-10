import React from 'react'
import InfoPageHeader from '@common/InfoPageHeader'
import InfoSafeList from '@components/InfoPage/InfoSafeList'
import * as i from '@pages/style/InfoSafePageStyle'

const InfoSafePage = () => {
  const infoHeaderProps = {
    backgroundImageSrc: '/public/image/image_info_safe.png',
    questionTitle:
      '블록홈즈는 어떻게 <br/> <span class="highlight-text"> 허위 매물</span>과 <span class="highlight-text"> 전세 사기</span>를 방지할까요? ',
  }
  return (
    <i.InfoSafePageContainer>
      <InfoPageHeader {...infoHeaderProps} />
      <InfoSafeList />
    </i.InfoSafePageContainer>
  )
}

export default InfoSafePage
