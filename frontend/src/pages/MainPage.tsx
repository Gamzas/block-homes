import * as h from '@pages/style/MainPageStyle'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'

const MainPage = () => {
  return (
    <h.Container>
      <TopCard />
      <RealEstateCategory />
      <Footer />
    </h.Container>
  )
}

export default MainPage
