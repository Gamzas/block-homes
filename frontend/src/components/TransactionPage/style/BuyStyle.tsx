import styled from 'styled-components'

export const BuyMainContainer = styled.div`
  margin-top: 0.4rem;
  display: flex;
  padding: 0 2rem;
  .header-text {
    width: 13.875rem;
    height: 1.4375rem;
    color: #845bd3;
    font-size: 2rem;
    font-weight: 600;
  }
  .ex {
    position: absolute;
    left: 58%;
    top: 10%;
  }
  .button-box {
    height: 2.7rem;
    align-self: end;
    display: flex;
    align-items: center;
    text-align: end;
  }
`

export const ProgressContainer = styled.div`
  width: 20%;
  height: 73.5vh;
`

export const MessageContainer = styled.div`
  width: 80%;
  height: 73.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
