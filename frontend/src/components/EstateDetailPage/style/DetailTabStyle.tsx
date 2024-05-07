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
