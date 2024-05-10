import { CustomButtonStyle } from '@/common/style/CustomButtonStyle'
import ProcessDetail from './ProcessDetail'
import * as b from './style/BuyStyle'
import TransactionStep from './TransactionStep'
import { useState } from 'react'

const Buyer = () => {
  const [currentindex, setCurrentIndex] = useState(0)
  return (
    <b.BuyMainContainer>
      <div className="ex">
        <CustomButtonStyle
          style={{ width: '2rem', height: '1rem' }}
          onClick={() => {
            setCurrentIndex(currentindex + 1)
          }}
        ></CustomButtonStyle>
      </div>
      <b.ProgressContainer>
        <TransactionStep currentindex={currentindex} />
      </b.ProgressContainer>
      <b.MessageContainer>
        <ProcessDetail
          title="[[부동산 거래 요청 승낙]]"
          content=" 판매자가 [[거래]] 요청을 [[보냈습니다]]! 요청을 승낙하고 거래를 계속해 보세요!"
          currentStep={currentindex}
          stepIndex={0}
        />
        <div className="button-box">
          {currentindex === 0 && (
            <CustomButtonStyle
              $secondary={true}
              style={{
                width: '5rem',
                height: '1.7rem',
                fontSize: '0.6rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#E8E8E8',
                fontWeight: '600',
                color: '#B0B0B0',
              }}
            >
              요청 거절하기
            </CustomButtonStyle>
          )}
          {currentindex === 0 && (
            <CustomButtonStyle
              style={{
                width: '5rem',
                height: '1.7rem',
                fontSize: '0.6rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              요청 승낙 하기
            </CustomButtonStyle>
          )}
        </div>
        <ProcessDetail
          title="[[특약 사항 작성]]"
          content="원하는 [[특약사항]]을 추가해보세요!
          집주인과 대화를 통해 특약사항을 조합해 
          나갈 수 있습니다."
          currentStep={currentindex}
          stepIndex={1}
        />
        <div className="button-box">
          {currentindex === 1 && (
            <CustomButtonStyle
              $secondary={true}
              style={{
                width: '5rem',
                height: '1.7rem',
                fontSize: '0.6rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#E8E8E8',
                fontWeight: '600',
                color: '#B0B0B0',
              }}
            >
              요청 거절하기
            </CustomButtonStyle>
          )}
          {currentindex === 1 && (
            <CustomButtonStyle
              style={{
                width: '5rem',
                height: '1.7rem',
                fontSize: '0.6rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              요청 승낙 하기
            </CustomButtonStyle>
          )}
        </div>
        <ProcessDetail
          title="[[계약서 서명 및 결제]]"
          content="스마트 컨트랙트를 통해 계약 서명 시 
          결제가 [[자동]]으로 이루어 집니다. 
          서명 전, 지갑에 거래 금액이 충분히 있는지 
          확인하세요!"
          currentStep={currentindex}
          stepIndex={2}
        />
        <div className="button-box">
          {currentindex === 2 && (
            <CustomButtonStyle
              style={{
                width: '6.3rem',
                height: '1.7rem',
                fontSize: '0.6rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              계약서 서명 및 작성
            </CustomButtonStyle>
          )}
        </div>

        <ProcessDetail
          title="[[거래 완료]]"
          content="거래가 완료되었습니다. 
          거래 내역은 블록체인에 자동으로 기록되어
          투명하게 관리되니 걱정마세요!"
          currentStep={currentindex}
          stepIndex={3}
        />
      </b.MessageContainer>
    </b.BuyMainContainer>
  )
}

export default Buyer
