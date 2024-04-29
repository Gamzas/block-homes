import * as o from '@components/MainPage/style/OwnEstateDidListStyle'
import EstateDidCard from '@common/EstateDidCard'

const OwnEstateDidList = () => {
  return (
    <o.OwnEstateDidListContainer>
      <div className="estate-did-info-text">내 부동산 DID 목록</div>
      <EstateDidCard />
      <o.DidListCarousel></o.DidListCarousel>
    </o.OwnEstateDidListContainer>
  )
}

export default OwnEstateDidList
