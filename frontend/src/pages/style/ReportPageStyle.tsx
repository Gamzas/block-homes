import styled from 'styled-components'

export const ReportContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .question-box {
    position: fixed;
    top: 1.2%;
    transform: translateX(430%);
    z-index: 1003;
    &:active {
      transform: translateX(430%) scale(0.93);
    }
  }
`
