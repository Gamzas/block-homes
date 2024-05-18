import React from 'react'
import * as b from '@components/TransactionPage/style/BuyerProcessStyle'
import ProcessDetail from '@components/TransactionPage/ProcessDetail'
import { useAtom } from 'jotai/index'
import { buyerStepAtom } from '@stores/atoms/userStore'

const BuyerProcess = () => {
  const [buyerStep] = useAtom(buyerStepAtom)

  return (
    <b.BuyerProcessContainer>
      <ProcessDetail
        title="[[부동산 거래 요청 승낙]]"
        content=" 판매자가 [[거래]] 요청을 [[보냈습니다]]! 요청을 승낙하고 거래를 계속해 보세요!"
        currentStep={buyerStep}
        stepIndex={1}
      />
      <ProcessDetail
        title="[[특약 사항 작성]]"
        content="원하는 [[특약사항]]을 추가해보세요!
          집주인과 대화를 통해 특약사항을 조합해
          나갈 수 있습니다."
        currentStep={buyerStep}
        stepIndex={3}
      />
      <ProcessDetail
        title="[[계약서 서명 및 결제]]"
        content="스마트 컨트랙트를 통해 계약 서명 시
          결제가 [[자동]]으로 이루어 집니다.
          서명 전, 지갑에 거래 금액이 충분히 있는지
          확인하세요!"
        currentStep={buyerStep}
        stepIndex={5}
      />
      <ProcessDetail
        title="[[거래 완료]]"
        content="거래가 완료되었습니다.
          거래 내역은 블록체인에 자동으로 기록되어
          투명하게 관리되니 걱정마세요!"
        currentStep={buyerStep}
        stepIndex={7}
      />
    </b.BuyerProcessContainer>
  )
}

export default BuyerProcess
