import styled from 'styled-components'

export const RealEstateTypeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 5%;
  padding: 0.5rem;
  position: relative;

  .select-box {
    border: none;
    margin-top: 1rem;

    &:focus {
      outline: none;
      border: none;
    }
  }
`
