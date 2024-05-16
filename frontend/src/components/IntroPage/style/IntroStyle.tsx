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
  height: 120%;
`

export const IntroRefreshButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 50px;
  height: 50px;

  background-image: url('/icon/icon_intro_refresh.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  cursor: pointer;
  z-index: 100;
`
