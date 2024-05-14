import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 390px;
  min-height: 80vh;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #b5b4b49f;
  /* z-index: 100; */
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalListContainer = styled.div`
  position: absolute;
  top: 1rem;
  /* z-index: 1000; */
  width: 80%;
  height: 100%;
  border-radius: 0.82531rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #f3f0f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 5rem 0;
  overflow-y: scroll;
  /* 스크롤바 숨기기를 위한 스타일 */
  ::-webkit-scrollbar {
    display: none; // 웹킷(Chrome, Safari 등) 브라우저에서 스크롤바 숨김
  }

  -ms-overflow-style: none; // IE, Edge에서 스크롤바 숨김
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
`

export const ModalListBox = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const LocationTitleContainer = styled.div`
  display: flex;
  align-items: center;
  .title-img {
    width: 4rem;
    height: 4rem;
  }
  .title {
    text-align: center;
    color: #000;
    font-size: 1rem;
    font-weight: 500;
  }
`

export const CloseBtnContainer = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 3rem;
  height: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`
