import Header from '@/common/Header'
import { ReportContainer } from './style/ReportPageStyle'
import ReportList from '@/components/Report/ReportList'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ReportPage = () => {
  const { estateNo } = useParams()
  console.log(estateNo)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  return (
    <ReportContainer>
      {isHeaderVisible && (
        <Header title="매물 레포트" isSearch={false} rightIconSrc="" />
      )}
      <ReportList
        isHeaderVisible={isHeaderVisible}
        onShowHeader={() => setIsHeaderVisible(true)}
        onHideHeader={() => setIsHeaderVisible(false)}
      ></ReportList>
    </ReportContainer>
  )
}

export default ReportPage
