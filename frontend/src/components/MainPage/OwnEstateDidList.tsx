import * as o from '@components/MainPage/style/OwnEstateDidListStyle'
import EstateDidCard from '@common/EstateDidCard'
import CustomCarousel from '@components/MainPage/CustomCarousel'
import EmptyEstateDidCard from '@components/CheckDidPage/EmptyEstateDidCard'
import { useState } from 'react'

const OwnEstateDidList = () => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState(0)

  const handleCenterChange = (newIndex: number) => {
    setCurrentCenterIndex(newIndex)
  }

  const cards = [
    {
      key: 0,
      content: (
        <EstateDidCard index={0} currentCenterIndex={currentCenterIndex} />
      ),
    },
    {
      key: 1,
      content: (
        <EstateDidCard index={1} currentCenterIndex={currentCenterIndex} />
      ),
    },
    {
      key: 2,
      content: (
        <EstateDidCard index={2} currentCenterIndex={currentCenterIndex} />
      ),
    },
    {
      key: 3,
      content: (
        <EmptyEstateDidCard index={3} currentCenterIndex={currentCenterIndex} />
      ),
    },
  ]

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
