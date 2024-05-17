import * as h from '@pages/style/MainPageStyle'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'
import UserTypeToggle from '@common/UserTypeToggle'
import { useAtom } from 'jotai'
import { userAtom, userTypeAtom } from '@stores/atoms/userStore'
import OwnEstateDidList from '@components/MainPage/OwnEstateDidList'
import InfoCardSlider from '@components/MainPage/InfoCardSlider'
import { useEffect } from 'react'

const MainPage = () => {
  const [currentUserType, setCurrentUserType] = useAtom(userTypeAtom)
  const [currentUser, setCurrentUser] = useAtom(userAtom)
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    const currentUserData = currentUser ? JSON.parse(currentUser) : null
    if (currentUserData && !currentUser) {
      setCurrentUser(currentUserData)
    } else if (!currentUserData && currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
  }, [])
  return (
    <h.MainPageContainer>
      <TopCard currentUser={currentUser} setCurrentUser={setCurrentUser} setCurrentUserType={setCurrentUserType} />
      <InfoCardSlider />
      {currentUserType.type === 0 && <RealEstateCategory />}
      {currentUser &&
        <>
          {currentUserType.type === 1 && <OwnEstateDidList currentUser={currentUser} />}
          <UserTypeToggle />
        </>
      }
      <Footer />
    </h.MainPageContainer>
  )
}

export default MainPage
