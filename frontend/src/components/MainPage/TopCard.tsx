import * as t from '@components/MainPage/style/TopCardStyle'

const TopCard = () => {
	return (
		<t.TopCardContainer>
			<t.TopCardHeader>
				<img
					alt="로고"
					className="logo"
					src="/image/image_main_character.png"
				/>
				<button className="login-btn">로그인</button>
			</t.TopCardHeader>
			<t.TopCardInfoTextContainer>
				<div className="main-info-text">
					로그인하고 <br />
					안전하고 쉬운 <span className="bold-text">부동산 거래</span>를 <br />
					시작해보세요!
				</div>
				<div className="info-report">매물 안전도 레포트란?</div>
			</t.TopCardInfoTextContainer>
			<t.CharacterContainer>
				<img
					alt="메인 돼지 캐릭터"
					className="pig-character"
					src="/image/image_main_character.png"
				/>
				<img
					alt="돋보기 이미지"
					className="reading-glasses"
					src="/image/image_reading_glasses.png"
				/>
				<img
					alt="지도 이미지"
					className="map"
					src="/image/image_map.png"
				/>
			</t.CharacterContainer>

			<t.BackgroundWaveContainer>
				<svg
					className="big-wave"
					xmlns="http://www.w3.org/2000/svg"
					width="390"
					height="95"
					viewBox="0 0 390 95"
					fill="none"
				>
					<path
						d="M114.559 0.0618186C49.9452 1.95114 10.5973 25.4102 -1 36.9035V95H396V47.0039C384.817 53.9978 377.321 57.1965 320.163 60.5028C263.005 63.8092 195.326 -2.29983 114.559 0.0618186Z"
						fill="#E8E0F7"
					/>
				</svg>
				<svg
					className="small-wave"
					xmlns="http://www.w3.org/2000/svg"
					width="390"
					height="57"
					viewBox="0 0 390 57"
					fill="none"
				>
					<path
						d="M125.588 0.0357332C60.9749 1.21596 10.5973 37.853 -1 45.0327V57H396V17C384.817 21.369 380.058 39.1378 322.9 41.2032C265.742 43.2686 206.355 -1.43955 125.588 0.0357332Z"
						fill="#D3C3F0"
					/>
				</svg>
			</t.BackgroundWaveContainer>
		</t.TopCardContainer>
	)
}

export default TopCard
