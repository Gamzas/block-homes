import * as r from '@pages/style/RealEstatePageStyle'
import Header from '@/common/Header'
import Footer from '@/common/Footer'
import ItemSafetyCard from '@/components/EstateDetailPage/ItemSafetyCard'

const RealEstateDetailPage = () => {
  return (
    <r.Container>
      <Header
        title={'매물 상세 조회'}
        isSearch={false}
        rightIconSrc={''}
      />
      <ItemSafetyCard />
      <Footer />
    </r.Container>
  )
}

export default RealEstateDetailPage
