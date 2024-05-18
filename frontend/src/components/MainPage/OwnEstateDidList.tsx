import * as o from '@components/MainPage/style/OwnEstateDidListStyle'
import Lottie from 'react-lottie'
import CustomCarousel from '@components/MainPage/CustomCarousel'
import React, { useEffect, useState } from 'react'
import { useGetAllVCofUser } from '@/abi/ownershipVCRegistry/getAllVCofUser'
import EstateDidCard from '@common/EstateDidCard'
import Search from '@assets/lotties/Search.json'

const OwnEstateDidList = ({ currentUser }) => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState(0)
  const [cards, setCards] = useState([])
  const { data: userVCArrayData } = useGetAllVCofUser(currentUser.walletAddress)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (userVCArrayData) {
      const newCards = userVCArrayData.map(
        (realEstateDID: string, index: number) => ({
          key: index,
          content: (
            <EstateDidCard
              index={index}
              currentCenterIndex={currentCenterIndex}
              realEstateDID={realEstateDID}
              currentUser={currentUser}
            />
          ),
        }),
      )
      // newCards.push({
      //   key: newCards.length,
      //   content: (
      //     <EmptyEstateDidCard
      //       index={newCards.length}
      //       currentCenterIndex={currentCenterIndex}
      //     />
      //   ),
      // })
      setCards(newCards)
      setIsLoading(false)
    }
  }, [userVCArrayData, currentCenterIndex])

  const handleCenterChange = (newIndex: number) => {
    setCurrentCenterIndex(newIndex)
  }

  const loadingLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Search,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <o.OwnEstateDidListContainer>
      {isLoading ? (
        <div className="three-loading">
          <Lottie
            options={loadingLottieOptions}
            height={200}
            width={200}
            style={{ position: 'absolute', zIndex: 10 }}
          />
        </div>
      ) : userVCArrayData.length !== 0 ? (
        <CustomCarousel
          cards={cards}
          offset={100}
          currentCenterIndex={currentCenterIndex}
          setCurrentCenterIndex={handleCenterChange}
        />
      ) : (
        <o.OwnEstateDidListEmptyContainer>
          <div className="icon" />
          <div>
            <span className="large">관련된 </span>
            <span className="highlight">부동산 카드가 </span>
            <span className="large">없습니다</span>
          </div>
        </o.OwnEstateDidListEmptyContainer>
      )}
    </o.OwnEstateDidListContainer>
  )
}

export default OwnEstateDidList
