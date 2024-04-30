import { useState } from 'react'
import Step from './Step'
import { Arrow, ScreenContainer } from './style/ContractPayment'
import { Button } from '@/common/style/Button'

const ConstractPayment = () => {
  const [screenIndex, setScreenIndex] = useState(0)
  const totalScreens = 2
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
  return (
    <>
      <Step currentindex={2}></Step>
      <ScreenContainer>
        {screenIndex > 0 && (
          <Arrow style={{ left: '10px' }} onClick={prevScreen}>
            &larr;
          </Arrow>
        )}
        <div>
          계약 내용을<br></br>확인해주세요
        </div>

        {screenIndex === 0 && <div>Screen 1 Contents</div>}
        {screenIndex === 1 && <div>Screen 2 Contents</div>}

        <div className="button-box">
          <Button disabled={screenIndex === 0}>결제</Button>
        </div>

        {screenIndex < totalScreens - 1 && <Arrow onClick={nextScreen}></Arrow>}
      </ScreenContainer>
    </>
  )
}

export default ConstractPayment
