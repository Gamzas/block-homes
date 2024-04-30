import styled from 'styled-components'

export const ContractAgreeWrapper = styled.div`
  width: 100%;
  height: 86vh;
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .card-section {
    margin: 20px 0;
  }
  .agreetext-main {
    .agreetext-section1 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      color: black;
    }
    .agreetext-section2 {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .agreetext-section3 {
      font-size: 15px;
      font-weight: 600;
      color: #cfc3c3;
      & p {
        margin-bottom: 10px;
      }
    }
  }
  .button-box {
    position: absolute;
    bottom: 3vh;
  }
`
