import * as h from '@pages/style/MainPageStyle'
import Header from '@common/Header'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'

const MainPage = () => {
  return (
    <h.Container>
      <Header />
      <TopCard />
      <RealEstateCategory />
      <Footer />
    </h.Container>
  )
}

export default MainPage
