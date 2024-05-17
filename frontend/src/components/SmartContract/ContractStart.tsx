import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { ContractStartContainer } from './style/ContractStart'
import { useAtom } from 'jotai'
import { contractStepAtom } from '@/stores/smartcontract'
import EstateDidCard from '@/common/EstateDidCard'

const ContractStart = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const handleNext = () => {
    setStep(step + 1)
  }
  return (
    <ContractStartContainer>
      <EstateDidCard
        index={1}
        currentCenterIndex={1}
        showRegistrationButton={false}
        realEstateDID={'did:klay:0x5cf9f8c31624c63759c152d733b46f48f9d37954'}
      />

      <div className="button-box">
        <CustomButtonStyle onClick={handleNext}>
          부동산 거래 시작
        </CustomButtonStyle>
      </div>
    </ContractStartContainer>
  )
}

export default ContractStart
