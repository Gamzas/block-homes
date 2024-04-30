import * as h from '@pages/style/MainPageStyle'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'
import UserTypeToggle from '@common/UserTypeToggle'
import { useAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import OwnEstateDidList from '@components/MainPage/OwnEstateDidList'

const MainPage = () => {
  const [currentUser] = useAtom(userAtom)
  return (
    <h.MainPageContainer>
      <TopCard />
      {currentUser.type === 0 && <RealEstateCategory />}
      {currentUser.type === 1 && <OwnEstateDidList />}
      <UserTypeToggle />
      <Footer />
    </h.MainPageContainer>
  )
}

export default MainPage
