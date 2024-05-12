import styled from 'styled-components'

export const SendMessageInputContainer = styled.nav`
  position: fixed;
  width: 390px;
  bottom: 0;
  z-index: 100;
  height: 60px;
`

export const SendMessageInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 2%;
  height: 60px;

  .message-input {
    width: 78%;
    height: 60%;
    background-color: #f2f3f6;
    border: none;
    padding: 4px 10px;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
  }
`

export const PlusButtonContainer = styled.div`
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    outline: none;
    border: none;
  }

  .plus-button {
    width: 1.5rem;
  }
`

export const SendButtonContainer = styled.div`
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    outline: none;
    border: none;
  }

  .send-button {
    width: 1.5rem;
  }
`
