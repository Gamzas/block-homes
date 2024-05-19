import styled from 'styled-components'

export const DetailCardContainer = styled.div`
  position: relative;
  width: 18.9375rem;
  height: 23.125rem;
  /* border: 1px solid red; */
  border-radius: 0.80444rem;
  background: #f8f4ff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  /* 스크롤바 숨기기를 위한 스타일 */
  ::-webkit-scrollbar {
    display: none; // 웹킷(Chrome, Safari 등) 브라우저에서 스크롤바 숨김
  }
  -ms-overflow-style: none; // IE, Edge에서 스크롤바 숨김
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
  .bgimg {
    position: absolute;
    width: 16rem;
    height: 16rem;
    transform: rotate(10.247deg);
    bottom: -2rem;
    right: -3rem;
    opacity: 34%;
  }
`
export const TiTleContainer = styled.div`
  color: #000;
  font-size: 1.016rem;
  font-weight: 700;
  margin-bottom: 2rem;
`
export const EstateInfoContainer = styled.div`
  width: 90%;
  display: flex;
  /* border: 1px solid blue; */
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 1.75rem;
    height: 1.75rem;
    /* border: 1px solid black; */
    margin-right: 0.3rem;
  }
  .content-box {
    /* border: 1px solid violet; */
  }
  .title {
    color: #000;
    font-size: 0.8285rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  .did {
    width: fit-content;
    height: 0.58756rem;
    border-radius: 0.25975rem;
    background: #fff;
    color: #555050;
    font-size: 0.38438rem;
    font-style: normal;
    font-weight: 600;
    padding: 0 0.5rem 0 0.5rem;
    display: flex;
    align-items: center;
  }
`
export const InfoWrapper = styled.div`
  width: 87%;
  /* border: 1px solid yellow; */
  margin-bottom: 1rem;
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  overflow-x: scroll;

  .title {
    /* border: 1px solid yellow; */
    margin-right: 1rem;
    color: #000;
    font-size: 0.766rem;
    font-weight: 500;
  }
  .detail {
    /* border: 1px solid yellow; */

    color: #555050;
    font-size: 0.7rem;
    font-weight: 500;
  }
  .long {
    color: #555050;
    font-size: 0.5rem;
    font-weight: 500;
  }
  .did {
    width: fit-content;
    height: 0.58756rem;
    border-radius: 0.25975rem;
    background: #fff;
    color: #555050;
    font-size: 0.38438rem;
    font-style: normal;
    font-weight: 600;
    padding: 0 0.5rem 0 0.5rem;
    display: flex;
    align-items: center;
  }
`
export const TermsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 0.7rem;
  .title {
    margin-right: 1rem;
    color: #000;
    font-size: 0.766rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .terms {
    color: #000;
    margin-bottom: 0.5rem;
    font-size: 0.6rem;
    font-weight: 500;
  }
`

export const CloseBtn = styled.div`
  width: 4.75rem;
  height: 4rem;
  border-radius: 0.3rem;
  background: #845bd3;
  color: #fff;
  font-size: 0.7rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`
