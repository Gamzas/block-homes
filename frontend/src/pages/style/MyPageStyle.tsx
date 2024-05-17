import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  /* FIX  배경색상 주석 풀고 아래 컴포넌트들 배경색상주기, 마진 풀고 패딩 주기*/
  /* background: #F7F8FA; */
`
export const CardWrapper = styled.div`
  width: 100%;
  position: fixed;
  max-width: 390px;
  z-index: 1;
  top: 0;
`
export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  top: 15rem;
  overflow-y: scroll;
  /* 스크롤바 숨기기를 위한 스타일 */
  ::-webkit-scrollbar {
    display: none; // 웹킷(Chrome, Safari 등) 브라우저에서 스크롤바 숨김
  }
  -ms-overflow-style: none; // IE, Edge에서 스크롤바 숨김
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
`
