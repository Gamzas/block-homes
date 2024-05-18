import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`

export const IntroCanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 180%;
`

export const IntroHeader = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 100;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icon {
    width: 50px;
    height: 100%;

    background-image: url('/icon/icon_360.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .refresh-button {
    width: 50px;
    height: 100%;

    background-image: url('/icon/icon_intro_refresh.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    cursor: pointer;
  }
`
