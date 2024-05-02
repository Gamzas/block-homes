import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as e from '@common/style/EstateDidCardStyle'

const EstateDidCard = () => {
  const [show, setShown] = useState(false)

  const springStyle = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
    borderRadius: '1.5rem',
  })

  return (
    <animated.div
      style={springStyle}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <e.EstateDidCardContainer>
        <e.TopContainer>
          <img
            alt="국가교통부"
            className="ministry-of-land-logo"
            src="/image/image_ministry_of_land_logo.png"
          />
          <img
            alt="건물 3d asset"
            className="building-type-image"
            src="/image/image_did_card_villa_or_towroom.png"
          />
          <e.BackgroundWaveContainer>
            <svg
              className="big-wave"
              xmlns="http://www.w3.org/2000/svg"
              width="209"
              height="53"
              viewBox="0 0 209 53"
              fill="none"
            >
              <path
                d="M60.8357 0.0390186C26.82 1.09297 6.10537 14.1795 0 20.591V53H209V11.896C203.113 15.7975 192.387 34.86 168.808 33.0256C145.228 31.1912 103.355 -1.27842 60.8357 0.0390186Z"
                fill="#C8F6F0"
              />
            </svg>
            <svg
              className="small-wave"
              xmlns="http://www.w3.org/2000/svg"
              width="209"
              height="37"
              viewBox="0 0 209 37"
              fill="none"
            >
              <path
                d="M76.825 0.0508788C42.8094 1.13488 6.10537 19.4141 0 26.0084V37H209V15.4565C203.113 19.4693 197.166 22.2879 176.214 23.6089C155.262 24.93 119.345 -1.30413 76.825 0.0508788Z"
                fill="#B9E7E7"
              />
            </svg>
          </e.BackgroundWaveContainer>
        </e.TopContainer>
        <e.BottomContainer>
          <e.InfoElement>
            <div className="element-title">등기권자</div>
            <div className="element-content">송강산</div>
          </e.InfoElement>
          <e.InfoElement>
            <div className="element-title">분류</div>
            <div className="element-content">아파트</div>
          </e.InfoElement>
          <e.InfoElement>
            <div className="element-title"> 주소</div>
            <div className="element-content">남동길 30번길 13 3층</div>
          </e.InfoElement>
          <e.InfoElement>
            <div className="element-title">등록일자</div>
            <div className="element-content">2020.03.21</div>
          </e.InfoElement>
        </e.BottomContainer>
      </e.EstateDidCardContainer>
    </animated.div>
  )
}

export default EstateDidCard
