import { Button } from '@/common/style/Button'
import { ContractStartContainer } from './style/ContractStart'
import { useAtom } from 'jotai'
import { contractStepAtom } from '@/stores/smartcontract'

const ContractStart = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const handleNext = () => {
    setStep(step + 1)
  }
  return (
    <ContractStartContainer>
      <div style={{ width: '239px', height: '270px', border: '1px solid' }}>
        카드 예정
      </div>
      <div className='button-box'>
        <Button onClick={handleNext} >부동산 거래 시작</Button>
      </div>
    </ContractStartContainer>
  )
}

export default ContractStart
