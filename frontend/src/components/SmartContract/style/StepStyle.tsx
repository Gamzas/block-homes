import styled from 'styled-components'

export const StepContainer = styled.div`
  width: 23rem;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
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
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }

  .pulse-animation {
    animation: pulse 1.5s infinite;
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
