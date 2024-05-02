import styled from 'styled-components'

export const EmptyEstateDidCardContainer = styled.div`
  cursor: pointer;
  width: 11rem;
  height: 14.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 0.1rem dashed #d9d9d9;
  background-color: #f6f6f6;
  filter: drop-shadow(0px 3.62px 3.62px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .plus-container {
    width: 2rem;
    height: 2rem;
    background-color: #d9d9d9;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .plus {
    color: white;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
