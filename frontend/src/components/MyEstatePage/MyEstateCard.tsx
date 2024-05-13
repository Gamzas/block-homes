import * as c from '@components/MyEstatePage/style/MyEstateCardStyle'

const MyEstateCard = () => {
  return (
    <c.MyEstateCardContainer>
      <div className='info-wrapper'>
        <c.IconContainer>
          <img src="/image/image_my_estate_trading.png" alt="이미지" />
          <div>매매</div>
        </c.IconContainer>
        <c.InfoContainer>
          <div className="amount">2억</div>
          <div className="address">남동길 30번길 13 3층</div>
        </c.InfoContainer>
      </div>
      <c.DetailBtnContainer>
        <div className="detail">매물 상세 정보</div>
        <img
          className="arrow-icon"
          src="/icon/icon_vertical_arrow.png"
          alt="화살표"
        />
      </c.DetailBtnContainer>
    </c.MyEstateCardContainer>
  )
}

export default MyEstateCard
