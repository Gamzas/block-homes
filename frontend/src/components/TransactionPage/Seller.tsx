import { CustomButtonStyle } from '@/common/style/CustomButtonStyle'
import ProcessDetail from './ProcessDetail'
import * as b from './style/BuyStyle'
import TransactionStep from './TransactionStep'
import { useState } from 'react'
import SpecialContract from './SpecialContract'


const Seller = () => {
  const [currentindex, setCurrentIndex] = useState(0)
  const [isSpecialOpen, setIsSpecialOpenOpen] = useState(false);

  const handleOpenModal = () => {
    setIsSpecialOpenOpen(true);
  };

  const handleCloseModal = () => {
    setIsSpecialOpenOpen(false);
  };

  
  
  return (
    <b.BuyMainContainer>
      {/* 확인용 버튼 삭제 필요 */}
      <div className="ex">
        <CustomButtonStyle
          style={{ width: '2rem', height: '1rem' ,backgroundColor:'red'}}
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
          title="[[부동산 거래 요청]]"
          content="구매자에게 [[거래 요청]]을 보냈습니다!"
          currentStep={currentindex}
          stepIndex={0}
        />
        <div className="button-box">
          
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
              style={{
                width: '6.3rem',
                height: '1.7rem',
                fontSize: '0.6rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
              onClick={handleOpenModal} 
            >
              특약 사항 작성 하기
            </CustomButtonStyle>
          )}
        </div>
        <ProcessDetail
          title="[[계약서 서명 및 결제]]"
          content="구매자에게 스마트 컨트랙트를 통한 계약 요청이 보내졌습니다. 거래가 완료된 이후 지갑에 [[거래 금액]]이 [[자동]]으로 입금 되어집니다!"
          currentStep={currentindex}
          stepIndex={2}
        />
        <div className="button-box">
        
        </div>
        <SpecialContract
                 open={isSpecialOpen} // 모달 열림 상태
                 handleClose={handleCloseModal} // 모달 닫기 함수 전달
                 />

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

export default Seller
