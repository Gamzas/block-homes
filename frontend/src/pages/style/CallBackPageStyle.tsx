import styled from 'styled-components'
import * as color from '@constants/colors'

export const CallBackPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .large {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.1rem;
    margin-bottom: 4rem;
  }

  .highlight {
    color: ${color.SAFE_HIGHLIGHT};
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.1rem;
    margin-bottom: 1rem;
  }

  .lottie-container {
    z-index: 1;
  }

  .self-check-did-info {
    position: absolute;
    bottom: 10rem;
    z-index: 100;
  }
`
