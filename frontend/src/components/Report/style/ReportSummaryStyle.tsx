import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 95%;
  height: 6rem;
  border: 2px solid #845bd3;
  border-radius: 20px;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  .check-text {
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    p {
      font-size: 0.75rem;
      color: #808080;
    }
  }
`
