import styled from 'styled-components'

export const InfoPageHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .background-image {
    position: absolute;
    top: 0.7rem;
    width: 11rem;
    opacity: 25%;
  }

  .question-title {
    margin: 5rem 0 3rem 0;
    width: 19rem;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8rem;
    z-index: 1;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);

    .highlight-text {
      color: #845bd3;
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1rem;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
    }
  }
`

export const QuestionLogoContainer = styled.div`
  position: absolute;
  background-color: #e8e0f7;
  border-radius: 5rem;
  width: 5rem;
  height: 5rem;
  top: -2.5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

  .question-logo {
    padding-bottom: 0.7rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #845bd3;
  }
`
