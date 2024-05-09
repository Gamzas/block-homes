import styled from 'styled-components'

export const DepositListContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  border-radius: 0.93313rem;
  background: #f3f0f7;
  box-shadow: 0px 5.972px 5.972px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  .title {
    width: 89%;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
  }
  .line {
    width: 100%;
    height: 0.08rem;
    background: #585858;
    margin-bottom: 1rem;
  }
`

export const DepositDetailContainer = styled.div`
  margin-bottom: 1.7rem;

  .deposit-text {
    width: 20.1875rem;
    display: flex;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 2;
    align-items: center;
    .deposit-text-box {
      width: 95%;
    }
  }
  .rotate-arrow {
    transform: rotateX(180deg);
    transition: transform 0.3s ease-in-out;
  }

  .deposit-explain {
    transition:
      opacity 0.5s ease-in-out,
      max-height 0.5s ease-in-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
    /* border: 1px solid; */
  }
  .deposit-explain.isVisible {
    opacity: 1;
    width: 20.1875rem;
    height: 100px;
    border-radius: 0.4375rem;
    background: #f9f9f9;
    box-shadow: 0px 5.972px 5.972px 0px rgba(0, 0, 0, 0.25);
    font-size: 1.1rem;
    font-weight: 600;
    color: #808080;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0.7rem;

    .text-middle {
      text-align: center;
      font-size: 1.3rem;
    }
    .text-bottom {
      text-align: end;
    }
  }
`
