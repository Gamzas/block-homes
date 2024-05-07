import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .title-box {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
  .title {
    color: #807c7c;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
  }
  .arrow-icon {
    width: 1rem;
    height: 1rem;
    transform: rotate(180deg);
  }
`
