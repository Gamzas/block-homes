import * as h from '@pages/style/MainPageStyle'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'
import UserTypeToggle from '@common/UserTypeToggle'

const MainPage = () => {
  return (
    <h.MainPageContainer>
      <TopCard />
      <RealEstateCategory />
      <UserTypeToggle />
      <Footer />
    </h.MainPageContainer>
  )
}

export default MainPage
