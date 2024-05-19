import * as h from '@pages/style/MainPageStyle'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'
import RealEstateCategory from '@components/MainPage/RealEstateCategory'
import UserTypeToggle from '@common/UserTypeToggle'
import { useAtom } from 'jotai'
import {
  isFirstOpenAtom,
  userAtom,
  userTypeAtom,
} from '@stores/atoms/userStore'
import OwnEstateDidList from '@components/MainPage/OwnEstateDidList'
import InfoCardSlider from '@components/MainPage/InfoCardSlider'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()
  const [currentUserType, setCurrentUserType] = useAtom(userTypeAtom)
  const [currentUser, setCurrentUser] = useAtom(userAtom)
  const [isFirstOpen, setIsFirstOpen] = useAtom(isFirstOpenAtom)

  useEffect(() => {
    if (currentUser.name === '' && isFirstOpen.isFirstOpen) navigate('/intro')
    setIsFirstOpen({ isFirstOpen: false })
  }, [])
  return (
    <h.MainPageContainer>
      <TopCard
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        currentUserType={currentUserType}
        setCurrentUserType={setCurrentUserType}
      />
      <InfoCardSlider />
      {currentUserType.type === 0 && <RealEstateCategory />}
      {currentUser.name !== '' && (
        <>
          {currentUserType.type === 1 && (
            <OwnEstateDidList currentUser={currentUser} />
          )}
          <UserTypeToggle />
        </>
      )}
      <Footer />
    </h.MainPageContainer>
  )
}

export default MainPage
