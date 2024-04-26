import React from 'react'
import { ContractBottomContainer } from './style/BoottomSheetStyle'
import { Button } from '@/common/style/Button'

const ContractBoottomSheet = () => {
  return (
    <div>
      <ContractBottomContainer $height={30}>
        <div>위 사항에 대해서 동의하시겠습니까?</div>
        <Button $secondary>확인</Button>
      </ContractBottomContainer>
    </div>
  )
}

export default ContractBoottomSheet
