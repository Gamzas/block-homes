import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import Step from './Step'
import { ContractAgreeWrapper } from './style/ContractAgreeStyle'
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
    <ContractAgreeWrapper>
      <Step currentindex={0}></Step>
      <div className="card-section">
        <div
          style={{
            width: '98px',
            height: '110px',
            border: '1px solid',
            color: 'black',
          }}
        >
          카드 예정
        </div>
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
    </ContractAgreeWrapper>
  )
}

export default ContractAgree
