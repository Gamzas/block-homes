import styled from 'styled-components'

export const MyEstateListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`
export const EditContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  text-decoration-line: underline;
`

export const MyEstateListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: white;
  padding-bottom: 5rem;
  /* 스크롤바 숨기기를 위한 스타일 */
  ::-webkit-scrollbar {
    display: none; // 웹킷(Chrome, Safari 등) 브라우저에서 스크롤바 숨김
  }
  -ms-overflow-style: none; // IE, Edge에서 스크롤바 숨김
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
`
export const ItemContainer = styled.div`
  width: 100%;
  position: relative;
  /* border: 1px solid red; */
  .delete-box {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    /* border: 1px solid black; */
  }
`
