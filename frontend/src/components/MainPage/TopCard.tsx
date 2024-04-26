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
      <t.BackgroundWaveContainer>
        <svg
          className="big-wave"
          xmlns="http://www.w3.org/2000/svg"
          width="389"
          height="95"
          viewBox="0 0 389 95"
          fill="none"
        >
          <path
            d="M112.521 0.0540113C49.0469 1.94349 10.3928 25.4045 -1 36.8988V95.0001H389V47C378.014 53.9946 370.65 57.1934 314.5 60.5001C258.35 63.8067 191.864 -2.30783 112.521 0.0540113Z"
            fill="#E8E0F7"
          />
        </svg>
        <svg
          className="small-wave"
          xmlns="http://www.w3.org/2000/svg"
          width="389"
          height="57"
          viewBox="0 0 389 57"
          fill="none"
        >
          <path
            d="M123.356 0.0357332C59.8821 1.21596 10.3928 37.853 -1 45.0327V57H389V17C378.014 21.369 373.339 39.1378 317.189 41.2032C261.038 43.2686 202.699 -1.43955 123.356 0.0357332Z"
            fill="#D3C3F0"
          />
        </svg>
      </t.BackgroundWaveContainer>
    </t.TopCardContainer>
  )
}

export default TopCard
