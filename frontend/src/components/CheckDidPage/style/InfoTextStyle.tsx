import styled from 'styled-components'
import * as color from '@constants/colors'

export const InfoTextContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 2.7rem;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .info-text-large {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.1rem;
  }

  .info-text-highlight {
    color: ${color.SAFE_HIGHLIGHT};
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 2.1rem;
  }

  .info-text-small {
    font-size: 1rem;
    font-weight: 300;
    padding-top: 1rem;
  }
`