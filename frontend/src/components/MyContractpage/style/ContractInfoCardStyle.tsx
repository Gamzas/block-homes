import styled from 'styled-components'

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MyEstateCardContainer = styled.div`
  width: 90%;
  height: 4.1875rem;
  border-radius: 1.3125rem;
  border: 1px solid #808080;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  .info-wrapper {
    display: flex;
  }
`
export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.9375rem;
  background: #edf1f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  img {
    width: 2.125rem;
    height: 2.125rem;
  }
  div {
    color: #000;
    font-size: 0.625rem;
    font-weight: 500;
  }
`

export const InfoContainer = styled.div`
  height: 3rem;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .amount {
    font-size: 0.875rem;
    font-weight: 700;
  }
  .address {
    color: #000;
    font-size: 0.5rem;
    font-weight: 400;
  }
`

export const DetailBtnContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  .detail {
    color: #000;
    font-size: 0.5rem;
    font-weight: 400;
    margin-right: 0.5rem;
  }
  .arrow-icon {
    width: 0.4rem;
    height: 0.2rem;
    transform: rotate(270deg);
    color: #807c7c;
  }
`
export const DetailCard = styled.div`
  width: 90%;
  border: 1px solid red;
  position: relative;
`
