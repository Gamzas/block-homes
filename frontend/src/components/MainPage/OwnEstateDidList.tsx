import * as o from '@components/MainPage/style/OwnEstateDidListStyle'
import EstateDidCard from '@common/EstateDidCard'
import CustomCarousel from '@components/MainPage/CustomCarousel'
import EmptyEstateDidCard from '@components/CheckDidPage/EmptyEstateDidCard'

const OwnEstateDidList = () => {
  const cards = [
    {
      key: 1,
      content: <EstateDidCard />,
    },
    {
      key: 2,
      content: <EstateDidCard />,
    },
    {
      key: 3,
      content: <EstateDidCard />,
    },
    {
      key: 4,
      content: <EmptyEstateDidCard />,
    },
  ]

  return (
    <o.OwnEstateDidListContainer>
      <div className="estate-did-info-text">내 부동산 DID 목록</div>
      <CustomCarousel
        cards={cards}
        offset={100}
        showArros={false}
        showNavigation={true}
      />
    </o.OwnEstateDidListContainer>
  )
}

export default OwnEstateDidList
