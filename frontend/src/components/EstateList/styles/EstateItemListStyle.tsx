import styled from 'styled-components'

export const StatusBarContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 390px;
  top: 50px;
  z-index: 1;
`

export const EstateItemListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const EstateFilterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 1rem;
  background: rgba(130, 130, 130, 0.7);
`

export const EstateItemCardsContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  width: 100%;
`

export const EstateListMapContainer = styled.div`
  height: 100vh;
  padding-top: 2.5rem;
  width: 100%;
  position: relative;
`
