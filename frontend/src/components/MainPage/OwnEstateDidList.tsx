import * as o from '@components/MainPage/style/OwnEstateDidListStyle'
import CustomCarousel from '@components/MainPage/CustomCarousel'
import { useEffect, useState } from 'react'
import { useGetAllVCofUser } from '@/abi/ownershipVCRegistry/getAllVCofUser'
import EmptyEstateDidCard from '@components/CheckDidPage/EmptyEstateDidCard'
import EstateDidCard from '@common/EstateDidCard'

const OwnEstateDidList = (currentUser) => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState(0)
  const [cards, setCards] = useState([])
  const { data: userVCArrayData } = useGetAllVCofUser(currentUser.currentUser.walletAddress)

  useEffect(() => {
    if (userVCArrayData) {
      const newCards = userVCArrayData.map((realEstateDID: string, index: number) => ({
        key: index,
        content: (
          <EstateDidCard
            index={index}
            currentCenterIndex={currentCenterIndex}
            realEstateDID={realEstateDID}
          />
        ),
      }))

      newCards.push({
        key: newCards.length,
        content: (
          <EmptyEstateDidCard
            index={newCards.length}
            currentCenterIndex={currentCenterIndex}
          />
        ),
      })

      setCards(newCards)
    }
  }, [userVCArrayData])

  const handleCenterChange = (newIndex: number) => {
    setCurrentCenterIndex(newIndex)
  }

  return (
    <o.OwnEstateDidListContainer>
      <div className="estate-did-info-text">내 소유 부동산 목록</div>
      <CustomCarousel
        cards={cards}
        offset={100}
        currentCenterIndex={currentCenterIndex}
        setCurrentCenterIndex={handleCenterChange}
      />
    </o.OwnEstateDidListContainer>
  )
}

export default OwnEstateDidList
