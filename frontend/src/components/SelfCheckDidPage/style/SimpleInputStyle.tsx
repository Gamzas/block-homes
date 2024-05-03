import styled from 'styled-components'

export const SimpleInputContainer = styled.div`
  width: 90%;
  margin: 5%;

  .input-title {
    width: 100%;
    font-size: 1rem;
    color: #808080;
    padding: 0.5rem;
  }
`

export const InputWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.2rem;

  .simple-input {
    width: 100%;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    border-bottom: 1.5px solid #d9d9d9;

    &:focus {
      outline: none;
      border-bottom: 2px solid #845bd3;
    }
  }
`
