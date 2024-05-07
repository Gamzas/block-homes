import styled from 'styled-components'

export const ReportContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid;
  .question-box {
    position: fixed;
    top: 0.6%;
    right: 2%;
    z-index: 1001;
    &:active {
      transform: scale(0.93);
    }
  }
`
