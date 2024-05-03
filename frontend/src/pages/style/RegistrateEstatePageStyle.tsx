import styled from 'styled-components'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'

export const RegistrateEstatePageStyleContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
`

export const AccodionWrapper = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 50px;
  left: 0;

  overflow-y: auto;
  // Chrome, Edge, Safari를 위한 스타일

  &::-webkit-scrollbar {
    display: none; // 스크롤바 영역을 표시하지 않습니다.
  }

  // Firefox를 위한 스타일
  scrollbar-width: none; // 스크롤바를 숨깁니다.
`

export const NextButton = styled(CustomButtonStyle)`
  position: fixed;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-50%);

  &:hover,
  &:active {
    transform: translateX(-50%);
  }
`
