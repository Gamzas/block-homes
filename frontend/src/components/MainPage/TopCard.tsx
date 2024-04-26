import * as t from '@components/MainPage/style/TopCardStyle'

const TopCard = () => {
  return (
    <t.TopCardContainer>
      <t.TopCardHeader>
        <image className="logo">로고</image>
        <button className="loginBtn">로그인</button>
      </t.TopCardHeader>
      <t.TopCardInfoTextContainer>
        <div className="mainInfoText">
          로그인하고 <br />
          안전하고 쉬운 부동산 거래를 <br />
          시작해보세요!
        </div>
        <div className="infoReport">매물 안전도 리스트란?</div>
      </t.TopCardInfoTextContainer>
    </t.TopCardContainer>
  )
}

export default TopCard
