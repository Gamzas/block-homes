import styled from 'styled-components'
import * as color from '@constants/colors'

export const OwnEstateDidListContainer = styled.div`
  padding: 1rem;
  margin-top: 0.5rem;

  .three-loading {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const DidListCarousel = styled.div`
  height: 35vh;
  width: 90%;
  margin: 0 auto;
`

export const OwnEstateDidListEmptyContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .icon {
    width: 200px;
    height: 200px;

    background-image: url('/icon/icon_empty.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    margin-bottom: 20px;
  }

  .large {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;
  }

  .highlight {
    color: ${color.SAFE_HIGHLIGHT};
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 2.1rem;
  }

  .small {
    font-size: 1rem;
    font-weight: 300;
    padding-top: 1rem;
  }

  white-space: pre-wrap;
`
