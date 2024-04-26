import styled from 'styled-components'

export const EstateMapContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
`

export const CurrentLocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2rem;
  // ---------------------------------
  background-color: white;
  border-radius: 1rem;
  /* border: 0.1rem solid; */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  // --------------------------------------
  flex-shrink: 0;
  position: absolute;
  z-index: 3;
  top: 2%; // 상단에서부터의 위치를 설정
  left: 2%; // 좌측에서부터의 위치를 설정
  .location-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.6rem;
  }
  .current-location {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
