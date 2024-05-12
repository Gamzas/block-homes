import * as h from '@pages/style/MainPageStyle'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'
import UserTypeToggle from '@common/UserTypeToggle'
import { useAtom } from 'jotai'
import { userTypeAtom } from '@stores/atoms/userStore'
import OwnEstateDidList from '@components/MainPage/OwnEstateDidList'
import InfoCardSlider from '@components/MainPage/InfoCardSlider'

const MainPage = () => {
  const [currentUserType] = useAtom(userTypeAtom)
  return (
    <h.MainPageContainer>
      <TopCard />
      <InfoCardSlider />
      {currentUserType.type === 0 && <RealEstateCategory />}
      {currentUserType.type === 1 && <OwnEstateDidList />}
      <UserTypeToggle />
      <Footer />
    </h.MainPageContainer>
  )
}

export default MainPage
