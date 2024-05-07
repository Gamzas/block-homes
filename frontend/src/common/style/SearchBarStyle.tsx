import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  width: 90%;
  display: flex;
  border-radius: 2rem;
  background: #f0f0f0;
  padding: 0.1rem 0.5rem 0.1rem 0.6rem;
  align-content: center;
  margin-right: 1rem;

  .input-box {
    width: 90%;
    border: none;
    background-color: #f0f0f0;
    padding-left: 0.5rem;

    &:focus {
      outline: none;
      border: none;
    }
  }

  .icon-find {
    width: 6%;
    margin: 0.4rem;
  }
`
