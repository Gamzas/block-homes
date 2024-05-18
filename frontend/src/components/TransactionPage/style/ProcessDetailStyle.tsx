import styled, { keyframes } from 'styled-components'

interface ProcessDetailContainerProps {
  $stepIndex: number
  $currentStep: number
}

const pulse = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(0.5);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

export const ProcessDetailContainer = styled.div<ProcessDetailContainerProps>`
  display: flex;
  margin: 0.7rem 0;
  height: ${props =>
    props.$stepIndex === props.$currentStep ? '13rem' : '10rem'};
`

export const LeftProcessDetailContainer = styled.div<ProcessDetailContainerProps>`
  align-items: center;
  margin: 0.5rem 1rem;
  height: 100%;
  width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .circle {
    circle {
      &:nth-child(2) {
        animation: ${pulse} 2s infinite;
        transform-origin: center center;
      }
    }
  }

  .line {
    width: 0;
    height: 80%;
    border: #845bd3 solid 1px;
    margin-top: 0.4rem;
    top: 1rem;
    left: 0.5rem;
  }
`

export const RightProcessDetailContainer = styled.div<ProcessDetailContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  margin-top: ${props =>
    props.$stepIndex === props.$currentStep ? '2rem' : '2rem'};
  height: ${props =>
    props.$stepIndex === props.$currentStep ? '11rem' : '7rem'};
`

export const ProcessContentContainer = styled.div<ProcessDetailContainerProps>`
  width: 18rem;
  height: 7rem;
  border-radius: 0.8rem;
  margin: ${props =>
    props.$stepIndex === props.$currentStep ? '0.9rem' : '0'};
  transform: ${props =>
    props.$stepIndex === props.$currentStep ? 'scale(1.1)' : 'scale(1)'};
  background: ${props =>
    props.$stepIndex === props.$currentStep
      ? 'rgba(232, 224, 247, 0.79);'
      : '#efefef'};
  border: ${props =>
    props.$stepIndex === props.$currentStep ? '1px solid #845BD3' : 'none'};

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem 0.5rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .title-box {
    font-size: 0.93rem;
    padding: 0 0.7rem;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  .content-box {
    padding: 0 0.7rem;
    font-size: 0.85rem;
  }

  transition: width 1s ease-in-out;
`
