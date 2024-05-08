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
    top: 1.6%;
    transform: translateX(455%);
    z-index: 1003;
    &:active {
      transform: translateX(455%) scale(0.93);
    }
  }
`
