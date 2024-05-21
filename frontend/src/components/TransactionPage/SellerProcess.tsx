import * as b from '@components/TransactionPage/style/BuyerProcessStyle'
import ProcessDetail from '@components/TransactionPage/ProcessDetail'
import { useAtom } from 'jotai/index'
import { userStepAtom } from '@stores/atoms/userStore'

const SellerProcess = () => {
  const [userStep] = useAtom(userStepAtom)

  console.log('userStep', userStep)

  return (
    <div>
      <b.BuyerProcessContainer>
        <ProcessDetail
          title="[[부동산 거래 요청]]"
          content="구매자에게 거래 요청을 보내고 거래를 시작하세요"
          currentStep={userStep}
          stepIndex={1}
        />
        <ProcessDetail
          title="[[특약 사항 작성]]"
          content="원하는 [[특약사항]]을 추가해보세요!
          집주인과 대화를 통해 특약사항을 조합해
          나갈 수 있습니다."
          currentStep={userStep}
          stepIndex={3}
        />
        <ProcessDetail
          title="[[계약서 블록체인 등록 및 서명]]"
          content="블록체인에 스마트 컨트랙트를 배포 후 서명을 해주세요. 거래가 완료된 이후 지갑에 돈이 자동으로 입금 되어집니다!"
          currentStep={userStep}
          stepIndex={5}
        />
        <ProcessDetail
          title="[[거래 완료]]"
          content="거래가 완료되었습니다.
          거래 내역은 블록체인에 자동으로 기록되어
          투명하게 관리되니 걱정마세요!"
          currentStep={userStep}
          stepIndex={7}
        />
      </b.BuyerProcessContainer>
    </div>
  )
}

export default SellerProcess
