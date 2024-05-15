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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 3rem;
  padding-bottom: 1rem;
`

export const EstateFilterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 1rem;
  background: rgba(130, 130, 130, 0.7);
`


// DELETE 컨테이너 삭제 

export const EstateMapContainer = styled.div`
  width: 100%;
  height: 2rem;
  position: relative;
  border: 3px solid yellow;
`
