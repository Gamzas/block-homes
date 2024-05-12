import styled from 'styled-components'

export const ItemListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EditContainer = styled.div`
  width: 85%;
  text-align: end;
  color: #757474;
  font-size: 0.875rem;
  font-weight: 500;
  .disabled {
    display: flex;
    align-items: center;
    justify-content: end;
    div:first-child {
      margin-right: 1rem; /* 첫 번째 div 요소에만 마진 적용 */
    }
  }
  .abled {
  }
`

export const selectedItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  input {
    margin-left: 0.7rem;
  }
`
