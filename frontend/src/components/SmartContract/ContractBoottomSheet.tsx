import { useState } from 'react'
import { ContractBottomContainer } from './style/BoottomSheetStyle'
import { Button } from '@/common/style/Button'
import { useAtom } from 'jotai'
import { contractStepAtom } from '@/stores/smartcontract'

const ContractBoottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSheet = () => {
    setIsOpen(!isOpen)
  }

  const [step, setStep] = useAtom(contractStepAtom)

  const handleNext = () => {
    setStep(step + 1)
  }

  return (
    <div>
      <ContractBottomContainer $height={isOpen ? 52 : 28}>
        {isOpen ? (
          <>
            <div className="understand-text">내용을 충분히 이해하셨나요?</div>
            <div className="understand-text-second">
              계약서 내용을 제대로 이해하지 못했는데도 이해했다고 확인하는 경우,
              추후 해당 내용과 관련한 권리구제가 어려울 수 있어요.
            </div>

            <Button
              $secondary
              onClick={toggleSheet}
              style={{ marginBottom: '10px' }}
            >
              닫기
            </Button>
            <Button onClick={handleNext}>네, 충분히 이해했어요</Button>
          </>
        ) : (
          <>
            <div className="agree-text">위 사항에 대해서 동의하시겠습니까?</div>
            <Button onClick={toggleSheet}>확인</Button>
          </>
        )}
      </ContractBottomContainer>
    </div>
  )
}

export default ContractBoottomSheet
