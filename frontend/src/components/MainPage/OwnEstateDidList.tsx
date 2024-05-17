import * as o from '@components/MainPage/style/OwnEstateDidListStyle'
import CustomCarousel from '@components/MainPage/CustomCarousel'
import { useEffect, useState } from 'react'
import { useGetAllVCofUser } from '@/abi/ownershipVCRegistry/getAllVCofUser'
import EstateDidCard from '@common/EstateDidCard'

const OwnEstateDidList = ({ currentUser }) => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState(0)
  const [cards, setCards] = useState([])
  const { data: userVCArrayData } = useGetAllVCofUser(currentUser.walletAddress)

  useEffect(() => {
    if (userVCArrayData) {
      const newCards = userVCArrayData.map((realEstateDID: string, index: number) => ({
        key: index,
        content: (
          <EstateDidCard
            index={index}
            currentCenterIndex={currentCenterIndex}
            realEstateDID={realEstateDID}
            currentUser={currentUser}
          />
        ),
      }))

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
