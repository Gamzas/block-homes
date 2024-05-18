import * as r from '@pages/style/RealEstatePageStyle'
import Header from '@/common/Header'
import DetailInfo from '@/components/EstateDetailPage/DetailInfo'
import useLoginStatus from '@/hooks/useLoginStatus'

const RealEstateDetailPage = () => {
  useLoginStatus()
  return (
    <r.Container>
      <Header title={'매물 상세 조회'} isSearch={false} rightIconSrc={''} />
      <DetailInfo />
    </r.Container>
  )
}

export default RealEstateDetailPage
