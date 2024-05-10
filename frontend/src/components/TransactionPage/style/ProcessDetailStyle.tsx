import styled from 'styled-components'

interface ProcessDetailContainerProps {
  stepIndex: number
  currentStep: number
}

export const ProcessDetailContainer = styled.div<ProcessDetailContainerProps>`
  width: 17.5625rem;
  border-radius: 0.8rem;
  /* width: ${props =>
    props.stepIndex === props.currentStep ? '17.5625rem;' : '16rem'};  */
  transform: ${props =>
    props.stepIndex === props.currentStep ? 'scale(1.1)' : 'scale(1)'};
  background: ${props =>
    props.stepIndex === props.currentStep
      ? 'rgba(232, 224, 247, 0.79);'
      : '#efefef'};
  border: ${props =>
    props.stepIndex === props.currentStep ? '1px solid #845BD3' : 'none'};

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem 0.5rem;
  font-weight: 500;
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
