import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as e from '@common/style/EstateDidCardStyle'
import { CustomButtonStyle } from './style/CustomButtonStyle'
import { useNavigate } from 'react-router-dom'
import { useGetRealEstateInfo } from '@/abi/realEstateInfo/getRealEstateInfo'
import { getRealEstateType } from '@/utils/estateTransferUtil'
import { BigNumber } from 'ethers'
import { formatDateToKoreanTime } from '@/utils/formatDateToKoreanTime'

const EstateDidCard = ({
  index,
  currentCenterIndex,
  showRegistrationButton = true,
  realEstateDID,
  currentUser,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()
  const { data: realEstateInfoData } = useGetRealEstateInfo(realEstateDID)

  const toggleCard = () => {
    if (index === currentCenterIndex) {
      setIsFlipped(!isFlipped)
    }
  }
  const handleButtonClick = e => {
    e.stopPropagation()
    navigate('estate-registration', {
      state: {
        realEstateDID: realEstateDID,
        realEstateInfoData: { ...realEstateInfoData },
      },
    })
  }

  const springStyleFront = useSpring({
    opacity: isFlipped ? 0 : 1,
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    boxShadow: '0 0.1rem 0.3rem rgb(0 0 0 / 8%)',
    borderRadius: '1.5rem',
  })

  const springStyleBack = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: isFlipped
      ? 'scale(1.15) rotateY(0deg)'
      : 'scale(1) rotateY(-180deg)',
    boxShadow: '0 0.3rem 0.8rem rgb(0 0 0 / 25%)',
    borderRadius: '1.5rem',
    pointerEvents: isFlipped ? 'auto' : 'none',
    top: 0, // 상단 정렬
    left: 0, // 좌측 정렬
  })

  return (
    <>
      {realEstateInfoData && currentUser && (
        <>
          <animated.div style={springStyleFront} onClick={toggleCard}>
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
                  <div className="element-title">소유자</div>
                  <div className="element-content">{currentUser.name}</div>
                </e.InfoElement>
                <e.InfoElement>
                  <div className="element-title">분류</div>
                  <div className="element-content">
                    {getRealEstateType(realEstateInfoData.estateType)}
                  </div>
                </e.InfoElement>
                <e.InfoElement>
                  <div className="element-title"> 주소</div>
                  <div className="element-content">
                    {realEstateInfoData.roadNameAddress}
                  </div>
                </e.InfoElement>
                <e.InfoElement>
                  <div className="element-title">등록일자</div>
                  <div className="element-content">
                    {formatDateToKoreanTime(realEstateInfoData.date)}
                  </div>
                </e.InfoElement>
              </e.BottomContainer>
            </e.EstateDidCardContainer>
          </animated.div>

          <animated.div
            style={{ ...springStyleBack, position: 'absolute' }}
            onClick={toggleCard}
          >
            <e.EstateDidCardContainer>
              <e.BackContainer>
                <e.BackInfoElement>
                  <div className="element-title">건물명</div>
                  <div className="element-content">
                    {realEstateInfoData.buildingName}
                  </div>
                </e.BackInfoElement>
                <e.BackInfoElement>
                  <div className="element-title">동 / 호수</div>
                  <div className="element-content">{`${realEstateInfoData.buildingNumber} 동 ${realEstateInfoData.roomNumber} 호`}</div>
                </e.BackInfoElement>
                <e.BackInfoElement>
                  <div className="element-title">위법</div>
                  <div className="element-content">
                    {`불법 건축물 : ${realEstateInfoData.isViolated ? '위법' : '합법'}`}
                    <br />
                    {`무허가 건축물 : ${realEstateInfoData.isNotPermitted ? '위법' : '합법'}`}
                  </div>
                </e.BackInfoElement>
                <e.BackInfoElement>
                  <div className="element-title">면적</div>
                  <div className="element-content">{`${realEstateInfoData.area} 평`}</div>
                </e.BackInfoElement>
                <e.BackInfoElement>
                  <div className="element-title">용도</div>
                  <div className="element-content">{`${realEstateInfoData.purpose}`}</div>
                </e.BackInfoElement>
                {/* 등기부 건축물 대장 구현 시 주석 해제 */}

                {/* <e.BackInfoElement>
            <div className='element-title'>등기사항전부증명서</div>
            <CustomButtonStyle style={{width:'2.7rem',height:'0.9rem',backgroundColor:'#B9E7E7',fontSize:'0.4rem',color:'black',boxShadow: '0px 2.721px 2.721px 0px rgba(0, 0, 0, 0.25)'}}> 조회하기</CustomButtonStyle>
          </e.BackInfoElement>
          <e.BackInfoElement>
            <div className='element-title'>등록일자</div>
            <CustomButtonStyle style={{width:'2.7rem',height:'0.9rem',backgroundColor:'#B9E7E7',fontSize:'0.4rem',color:'black',boxShadow: '0px 2.721px 2.721px 0px rgba(0, 0, 0, 0.25)'}}> 조회하기</CustomButtonStyle>
          </e.BackInfoElement> */}
                {showRegistrationButton && (
                  <div className="registration-button-box">
                    <CustomButtonStyle
                      onClick={handleButtonClick}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        backgroundColor: '#FFF',
                        fontSize: '0.6rem',
                        color: 'black',
                        boxShadow:
                          '0px 2.721px 2.721px 0px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {' '}
                      매물로 등록하기
                    </CustomButtonStyle>
                  </div>
                )}

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
              </e.BackContainer>
            </e.EstateDidCardContainer>
          </animated.div>
        </>
      )}
    </>
  )
}

export default EstateDidCard
