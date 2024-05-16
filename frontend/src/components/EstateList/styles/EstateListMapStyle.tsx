import styled from 'styled-components'

export const EstateMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
`

export const DetailCardContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 390px;
  background: rgba(196, 195, 195, 0.7);
  bottom: 4rem;
  z-index: 10;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-background {
    width: 100%;
    height: 80vh;
  }
`
