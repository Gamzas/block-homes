import styled from 'styled-components'

export const TransactionProcedureContainer = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.625rem;
  background: #f3f0f7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
`

export const IconContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  .txt {
    color: #845bd3;
    text-align: center;
    font-size: 0.6rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`
