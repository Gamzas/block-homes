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
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 2.5rem;
  /* background-color: white; */
  overflow-y: scroll;
  /* 스크롤바 숨기기를 위한 스타일 */
  ::-webkit-scrollbar {
    display: none; // 웹킷(Chrome, Safari 등) 브라우저에서 스크롤바 숨김
  }
  -ms-overflow-style: none; // IE, Edge에서 스크롤바 숨김
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
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
`
