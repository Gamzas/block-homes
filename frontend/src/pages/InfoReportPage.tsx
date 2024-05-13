import React from 'react'
import InfoPageHeader from '@common/InfoPageHeader'
import * as i from '@pages/style/InfoReportPageStyle'
import InfoReportList from '@components/InfoPage/InfoReportList'

const InfoReportPage = () => {
  const infoHeaderProps = {
    backgroundImageSrc: '/public/image/image_info_report.png',
    questionTitle:
      '<span class="highlight-text"> 매물 레포트</span>에는 어떤 내용이 <br/>  담겨있을까요?',
  }

  return (
    <i.InfoReportContainer>
      <InfoPageHeader {...infoHeaderProps} />
      <InfoReportList />
    </i.InfoReportContainer>
  )
}

export default InfoReportPage
