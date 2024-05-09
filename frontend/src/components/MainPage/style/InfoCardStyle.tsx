import styled from 'styled-components'

interface InfoCardContainerProps {
  $backgroundColor: string
}

export const InfoCardContainer = styled.div<InfoCardContainerProps>`
  background-color: ${props => props.$backgroundColor};
  position: relative;
  width: 96%;
  height: 14vh;
  margin: 0 2% 0.5rem 2%;
  display: flex;
  border-radius: 1rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

  .image-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 35%;
    position: absolute;
    margin-left: 0.5rem;

    .left-image {
      width: 100%;
      opacity: 40%;
    }
  }
`

export const InfoContainer = styled.div`
  width: fit-content;
  margin: auto;
  align-content: end;
  z-index: 1;

  .info-text {
    width: fit-content;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.7rem;

    .highlight-text {
      color: #845bd3;
      font-weight: 800;
    }
  }
`

export const NavigateButtonContainer = styled.div`
  position: absolute;
  bottom: 0.7rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 10rem;
  background-color: white;
  padding: 0.5rem 0.6rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

  .button-title {
    font-weight: 500;
    font-size: 0.65rem;
  }

  .double-right-arrows {
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 0.5rem;
  }
`
