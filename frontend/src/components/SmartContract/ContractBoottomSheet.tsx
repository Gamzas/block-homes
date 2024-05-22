import { useEffect, useState } from 'react'
import { ContractBottomContainer } from './style/BoottomSheetStyle'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useAtom } from 'jotai'
import { contractStepAtom } from '@/stores/smartcontract'

const ContractBoottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  })

  const toggleSheet = () => {
    setIsOpen(!isOpen)
  }

  const [step, setStep] = useAtom(contractStepAtom)

  const handleNext = () => {
    setStep(step + 1)
  }

  return (
    <div>
      <ContractBottomContainer
        $height={isOpen ? 52 : 28}
        $isVisible={isVisible}
      >
        {isOpen ? (
          <>
            <div className="understand-text">내용을 충분히 이해하셨나요?</div>
            <div className="understand-text-second">
              계약서 내용을 제대로 이해하지 못했는데도 이해했다고 확인하는 경우,
              추후 해당 내용과 관련한 권리구제가 어려울 수 있어요.
            </div>

            <CustomButtonStyle
              $secondary
              onClick={toggleSheet}
              style={{ marginBottom: '10px' }}
            >
              닫기
            </CustomButtonStyle>
            <CustomButtonStyle onClick={handleNext}>
              네, 충분히 이해했어요
            </CustomButtonStyle>
          </>
        ) : (
          <>
            <div className="agree-text">위 사항에 대해서 동의하시겠습니까?</div>
            <CustomButtonStyle onClick={toggleSheet}>확인</CustomButtonStyle>
          </>
        )}
      </ContractBottomContainer>
    </div>
  )
}

export default ContractBoottomSheet
