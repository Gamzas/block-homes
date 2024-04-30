import styled from 'styled-components'

export const StepContainer = styled.div`
  width: 390px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  color: black;

  .step-div {
    /* border: 1px solid; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .line {
    width: 88px;
    height: 2px;
    background: #d9d9d9;
    margin: 0 8px;
  }
`

export const StepCard = styled.div`
  position: relative;

  .step-text {
    width: 80px;
    position: absolute;
    top: 45px;
    left: -27px;
    text-align: center;
    color: #cfc3c3;
    font-size: 13px;
  }

  .step-current-text {
    font-size: 13px;
    width: 80px;
    position: absolute;
    top: 45px;
    left: -27px;
    text-align: center;
  }
`
