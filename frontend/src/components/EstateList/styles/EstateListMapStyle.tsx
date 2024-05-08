import styled from 'styled-components'

export const EstateMapContainer = styled.div`
  width: 100%;
  height: 82vh;
  position: relative;
  z-index: 0;
`

export const DetailCardContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 390px;
  background: rgba(196, 195, 195, 0.7);
  /* height: 50vh; */

  /* left: 1rem; */
  bottom: 4rem;
  z-index: 10;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card-background {
    width: 100%;
    height: 80vh;
    /* border: 3px solid red; */
    /* z-index: 15; */
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 2px solid black;
  }
`

export const CloseCardContainer = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid red;
  position: absolute;
  right: 4rem;
  bottom: 0rem;
`
