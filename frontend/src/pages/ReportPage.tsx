import Header from '@/common/Header'
import { ReportContainer } from './style/ReportPageStyle'
import ReportList from '@/components/Report/ReportList'

const ReportPage = () => {
  return (
    <ReportContainer>
      <Header title="매물 레포트" isSearch={false} rightIconSrc="" />
      <ReportList></ReportList>
    </ReportContainer>
  )
}

export default ReportPage
