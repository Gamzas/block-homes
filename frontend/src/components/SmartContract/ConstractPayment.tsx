import { useState } from 'react'
import Step from './Step'
import { Arrow, ScreenContainer } from './style/ContractPayment'
import { Button } from '@/common/style/Button'


const ConstractPayment = () => {

  const [screenIndex, setScreenIndex] = useState(0)
  const totalScreens =2
  const nextScreen = () =>{

    if (screenIndex<totalScreens-1){
      setScreenIndex(screenIndex+1)
    }
  }

  const prevScreen = () =>{
    if(screenIndex>0){
      setScreenIndex(screenIndex-1)
    }

  }
  return (

    <>
      <Step currentindex={2}></Step>
      <ScreenContainer>
      
        {screenIndex > 0 && (
          <Arrow style={{left: '10px'}} onClick={prevScreen}>&larr;</Arrow>
        )}

          {screenIndex === 0 && <div style={{color:'black'}}>Screen 1 Contents
          <Button disabled>결제</Button>
          </div>}
          {screenIndex === 1 && <div style={{color:'black'}}>Screen 2 Contents
          
          <Button>결제</Button>
          </div>}

        {screenIndex < totalScreens - 1 && (
          <Arrow onClick={nextScreen}></Arrow>
        )}
      </ScreenContainer>
      
    </>
  )
}

export default ConstractPayment
