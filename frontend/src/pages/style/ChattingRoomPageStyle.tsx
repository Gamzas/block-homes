import styled from 'styled-components'

export const ChattingRoomPageContainer = styled.div`
  max-width: 390px;
  height: 100vh;
  padding-bottom: 60px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`

export const ChattingHeader = styled.div`
  background: #f3f0f7;
  display: flex;

  .image-container {
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    margin: 0.5rem;
    border: 1rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  .chatting-header-button {
    padding: 0.4rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    border: 1.5px solid #845bd3;
  }
`
export const MessageListContainer = styled.div`
  margin: 1rem;
`
