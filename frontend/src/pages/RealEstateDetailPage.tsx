import * as r from '@pages/style/RealEstatePageStyle'
import Header from '@/common/Header'
import ItemSafetyCard from '@/components/EstateDetailPage/ItemSafetyCard'
import DetailTabMenu from '@/components/EstateDetailPage/DetailTabMenu'
import RoomInfo from '@/components/EstateDetailPage/RoomInfo'
import DetailFooter from '@/components/EstateDetailPage/DetailFooter'

const RealEstateDetailPage = () => {
  return (
    <r.Container>
      <Header title={'매물 상세 조회'} isSearch={false} rightIconSrc={''} />
      <DetailTabMenu />
      <ItemSafetyCard />
      <RoomInfo />
      <DetailFooter />
    </r.Container>
  )
}

export default RealEstateDetailPage
