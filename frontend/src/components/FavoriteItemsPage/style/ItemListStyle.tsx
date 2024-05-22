import styled from 'styled-components'

export const ItemListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  overflow: scroll;
  overflow-y: scroll;
  /* 스크롤바 숨기기를 위한 스타일 */
  ::-webkit-scrollbar {
    display: none; // 웹킷(Chrome, Safari 등) 브라우저에서 스크롤바 숨김
  }
  -ms-overflow-style: none; // IE, Edge에서 스크롤바 숨김
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
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
    justify-content: space-between;

    .delete {
      display: flex;
      div:first-child {
        margin-right: 1rem; /* 첫 번째 div 요소에만 마진 적용 */
      }
    }
  }
  .abled {
  }
`

export const selectedItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input[type='checkbox'] {
    background-color: white;
    margin-left: 0.7rem;
  }
`
