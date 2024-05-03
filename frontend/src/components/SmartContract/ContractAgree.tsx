import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import Step from './Step'
import { ContractAgreeWrapper } from './style/ContractAgreeStyle'
import { useAtom } from 'jotai'
import { contractStepAtom } from '@/stores/smartcontract'

const ContractAgree = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const handleNext = () => {
    setStep(step + 1)
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
        <div className="agreetext-section2">개인(신용)정보 필수적 동의</div>
        <div className="agreetext-section3">
          <p>개인(신용)정보 수집이용 동의</p>
          <p>개인(신용)정보 조회 동의</p>
          <p>고유식별정보 처리에 관한 동의</p>
          <p>개인정보 제3자 제공 동의</p>
          <p>공공마이데이터활용 개인정보 수집이용 등에 관한 동의</p>
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
