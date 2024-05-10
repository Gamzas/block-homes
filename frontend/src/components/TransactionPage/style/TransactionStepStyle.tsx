import styled from 'styled-components'

export const StepContainer = styled.div`
  width: 2rem;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  color: black;

  .step-div {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    height: 22rem;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
  }

  .line {
    border-radius: 1rem;
    width: 0.18rem;
    height: 6rem;
    background: #845bd3;
  }
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.22);
      opacity: 0.7;
    }
  }

  .pulse-animation {
    animation: pulse 1.5s infinite;
  }
`

export const StepCard = styled.div`
  position: relative;
  height: 1.75rem;
  width: 2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: start;

  .step-text,
  .step-current-text {
    width: 80px;
    position: absolute;
    top: 60px;
    left: -15px;
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
