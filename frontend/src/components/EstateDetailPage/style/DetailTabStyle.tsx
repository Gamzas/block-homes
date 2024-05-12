import styled from 'styled-components'

export const TabMenu = styled.div`
  background-color: #e0e0e0;
  color: rgb(232, 234, 237);
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  /* margin-bottom: 1rem; */
  margin-top: 0.1rem;
  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    width: calc(100% / 3);
    padding: 0.1rem;
    transition: 0.5s;
    justify-content: center;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(24, 23, 23);
    color: rgb(21, 20, 20);
  }

  & div.desc {
    text-align: center;
  }
`
export const Desc = styled.div`
  text-align: center;
  .desc-img {
    width: 100%;
    height: 16rem;
  }

  .slick-dots {
    position: absolute;
    bottom: 1rem; /* 이미지의 상단에 위치시키기 위해 bottom 값을 조정 */
    width: 100%;
    text-align: center;
  }
  .slick-dots li {
    margin: 0; /* 기본 margin 조정 */
  }

  .slick-dots li button {
    width: 20px; /* 원하는 너비로 설정 */
    height: 20px; /* 원하는 높이로 설정 */
    padding: 0; /* 필요에 따라 padding 조정 */
  }
  .slick-dots li button:before {
    font-size: 2rem; /* 점의 크기를 늘립니다 */
    line-height: 20px; /* 텍스트 라인 높이를 조정하여 버튼 내부 중앙에 위치하도록 합니다 */
    color: #cfcfcf; /* dots 색상 변경 */
  }

  .slick-dots li.slick-active button:before {
    color: #000; /* 활성화된 점의 색상 변경 */
    opacity: 1; /* 투명도 조정 */
  }
`

export const TabMenuImgContainer = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  .icon-container {
    display: flex;
    justify-content: center;
    width: calc(100% / 3);
  }
  .tab-icon {
    width: 1.3rem;
    height: 1.1rem;
  }
`
