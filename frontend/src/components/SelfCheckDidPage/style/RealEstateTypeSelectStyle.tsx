import styled from 'styled-components'

export const RealEstateTypeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 5%;

  position: relative;

  .select-title {
    width: 100%;
    font-size: 1rem;
    color: #808080;
    padding: 0.5rem;
  }

  .select-box {
    border: none;
    margin-top: 1rem;

    &:focus {
      outline: none;
      border: none;
    }
  }
`
