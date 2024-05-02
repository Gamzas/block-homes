import styled from 'styled-components'

export const EstateMapContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
`


export const DetailCardContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 1.2rem;
  bottom: 10rem;
  justify-content: center;
  z-index: 10;
`

export const CloseCardContainer = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid red;
  position: absolute;
  right: 4rem;
  bottom: 0rem;
`
