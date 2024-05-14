import styled from 'styled-components'

interface ChatPreviewComponentContainerProps {
  $color: string
}

export const ChatPreviewComponentContainer = styled.div<ChatPreviewComponentContainerProps>`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: ${props => props.$color};
  border-bottom: 0.05rem solid #eaeaea;

  .image-container {
    width: 6rem;
    height: 6rem;
    margin: 1rem;

    .estate-image {
      width: 6rem;
      height: 6rem;
      border-radius: 0.5rem;
    }
  }
`

export const ChatComponentRightContainer = styled.div`
  width: 75%;
  margin: 2.5% 0;

  .address-type {
    display: flex;
    align-items: center;
  }

  .address {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .type {
    font-size: 0.8rem;
    color: #888888;
  }

  .price {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem 0;

    img {
      margin-right: 0.2rem;
      width: 1rem;
      padding: 0.05rem;
    }
  }

  .last-chat {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    color: #888888;

    img {
      margin-right: 0.2rem;
      width: 1rem;
      padding: 0.05rem;
    }
  }
`
