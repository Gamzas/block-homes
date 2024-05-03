import { useState } from 'react'
import Step from './Step'
import * as c from './style/ContractPayment'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useSwipeable } from 'react-swipeable'
import { contractStepAtom } from '@/stores/smartcontract'
import { useAtom } from 'jotai'
import ScreenIndicators from './ScreenIndicator'



const ContractPayment = () => {
  const [step,setStep] = useAtom(contractStepAtom)
  const [screenIndex, setScreenIndex] = useState(0)
  const totalScreens = 2

  const handleNext = () =>{
    setStep(step + 1)
  }
  const nextScreen = () => {
    if (screenIndex < totalScreens - 1) {
      setScreenIndex(screenIndex + 1)
    }
  }

  const prevScreen = () => {
    if (screenIndex > 0) {
      setScreenIndex(screenIndex - 1)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setScreenIndex(prevIndex =>
        prevIndex < totalScreens - 1 ? prevIndex + 1 : prevIndex,
      ),
    onSwipedRight: () =>
      setScreenIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex)),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })
  return (
    <>
      <Step currentindex={2}></Step>
      <c.ScreenContainer {...swipeHandlers}>
    
        <div className="contract-text">
          계약 내용을<br></br>확인해주세요
        </div>
        <ScreenIndicators totalScreens={totalScreens} currentIndex={screenIndex}></ScreenIndicators>

        {screenIndex === 0 && (
          <div>
            <div
              style={{ width: '239px', height: '270px', border: '1px solid' }}
              className="card-box"
            >
              카드 예정
            </div>
            <p className="card-text">
              해당 매물은 자동으로 나의 지갑에 추가됩니다
            </p>
          </div>
        )}
        {screenIndex === 1 && (
          <c.GridContainer>
            <c.Cell>
              <c.Label>임대인</c.Label>
              <c.Value>오기선</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>임차인</c.Label>
              <c.Value>송강산</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>계약일자</c.Label>
              <c.Value>2024.04.03</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>보증금</c.Label>
              <c.Value>2,000,000,000</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>월세금</c.Label>
              <c.Value>300,000</c.Value>
            </c.Cell>
          </c.GridContainer>
        )}

        <div className="button-box">
          <CustomButtonStyle disabled={screenIndex === 0} onClick={handleNext}>
            결제
          </CustomButtonStyle>
        </div>
     
      </c.ScreenContainer>
    </>
  )
}

export default ContractPayment
