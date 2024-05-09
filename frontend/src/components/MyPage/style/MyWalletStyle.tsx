import styled from 'styled-components'

export const WalletWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const WalletContainer = styled.div`
  width: 90%;
  height: 5.375rem;
  border-radius: 1.25rem;
  background: #845bd3;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .wallet {
    width: 5rem;
    height: 5rem;
  }
`
export const BalanceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  .title,
  .balance {
    color: #fff;
  }
  .title {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem; /* 114.286% */
    margin-bottom: 0.5rem;
  }
  .balance {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 500;
  }
`
