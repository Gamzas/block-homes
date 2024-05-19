import styled from 'styled-components'

export const ChattingRoomPageContainer = styled.div`
  max-width: 390px;
  height: 100vh;
  padding-bottom: 60px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

export const ChattingHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 390px;
  z-index: 100;
`

export const ChattingHeader = styled.div`
  background: #f3f0f7;
  display: flex;
  height: 6rem;
  align-items: center;
  margin-top: 50px;

  .image-container {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    margin: 0.5rem;
    border: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  height: 100%;
  justify-content: space-evenly;
  margin: 0.2rem;
  font-size: 0.8rem;
  font-weight: 300;

  .transaction-price {
    display: flex;
    height: 1.3rem;
    align-items: center;

    .transaction-type-container {
      margin-right: 0.3rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: #845bd3;
    }

    .price-container {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;

  .chatting-header-button {
    padding: 0.3rem;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    border: 1.5px solid #845bd3;
    margin-right: 0.3rem;
    font-weight: 300;
  }
`

export const MessageListScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`
export const MessageListContainer = styled.div`
  margin: 1rem 1rem 0 1rem;
  padding-top: 6rem;
`
