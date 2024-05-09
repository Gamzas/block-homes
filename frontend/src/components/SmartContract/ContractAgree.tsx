import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import Step from './Step'
import * as e from './style/ContractAgreeStyle'
import { useAtom } from 'jotai'
import { contractStepAtom } from '@/stores/smartcontract'
import { useState } from 'react'

const ContractAgree = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const [isAgreed, setIsAgreed] = useState(false)
  const handleNext = () => {
    setIsAgreed(true)
    setTimeout(() => {
      setStep(step + 1)
    }, 1200)
  }
  return (
    <e.ContractAgreeWrapper>
      <Step currentindex={0}></Step>
      <div className="card-section">
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
                width="100"
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
          <e.BottomContainer></e.BottomContainer>
        </e.EstateDidCardContainer>
      </div>
      <div className="agreetext-main">
        <div className="agreetext-section1">
          <span style={{ fontSize: '25px', color: '#845BD3' }}>
            임대차 계약
          </span>
          신청을 위해 꼭 필요한 동의만 추렸어요
        </div>
        <div className="agreetext-section2">
          개인(신용)정보 필수적 동의{' '}
          {isAgreed && (
            <span style={{ color: 'green', marginLeft: '0.8rem' }}>✔</span>
          )}
        </div>
        <div className="agreetext-section3">
          {[
            '개인(신용)정보 수집이용 동의',
            '개인(신용)정보 조회 동의',
            '고유식별정보 처리에 관한 동의',
            '개인정보 제3자 제공 동의',
            '공공마이데이터 개인정보 수집이용 등에 관한 동의',
          ].map((text, index) => (
            <p key={index}>
              {text}{' '}
              {isAgreed && (
                <span style={{ color: 'green', marginLeft: '0.8rem' }}>✔</span>
              )}
            </p>
          ))}
        </div>
      </div>
      <div className="button-box">
        <CustomButtonStyle onClick={handleNext}>
          필수 약관 모두 동의하기
        </CustomButtonStyle>
      </div>
    </e.ContractAgreeWrapper>
  )
}

export default ContractAgree
