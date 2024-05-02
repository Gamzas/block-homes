import * as i from '@components/EstateDetailPage/style/ItemSafetyCardStyle'

const ItemSafetyCard = () => {
  return (
    <i.SafetyCardContainer>
      <i.ImgContainer>
        <img
          className="alert-img"
          src="/image/image_normal.png"
          alt="알려주는돼지"
        />
        <img
          className="pig-img"
          src="/image/image_alertPig.png"
          alt="알려주는돼지"
        />
      </i.ImgContainer>
    </i.SafetyCardContainer>
  )
}

export default ItemSafetyCard
