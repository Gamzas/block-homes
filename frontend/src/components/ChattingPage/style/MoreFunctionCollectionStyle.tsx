import styled from 'styled-components'

export const MoreFunctionCollectionContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  justify-content: space-around;
`

export const MoreFunctionData = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 8rem;
  background-color: #eae4f8;

  .more-function-data-image-container {
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 8rem;
    background-color: #eae4f8;
    cursor: pointer;
  }

  .more-function-data-image {
    width: 2rem;
  }

  .more-function-data-title {
    height: 1.6rem;
    width: 95%;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`
