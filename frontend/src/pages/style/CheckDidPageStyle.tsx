import styled from 'styled-components'

export const CheckDidPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  .lottie-container {
    z-index: 1;
  }

  .self-check-did-info {
    position: absolute;
    bottom: 10rem;
    z-index: 100;
  }
`
