import styled from 'styled-components'

export const EmptyContainer = styled.div`
  width: 100%;
  height: 0.6875rem;
  background: #f7f8fa;
  /* margin-top: 2rem; */
`

export const MenuContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  background-color: white;
  /* margin-top: 1rem; */
  .menu {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    color: #5c5c5c;
    font-size: 0.875rem;
    font-weight: 700;
  }
  .arrow-icon {
    width: 1rem;
    height: 1rem;
    transform: rotate(180deg);
    color: #807c7c;
  }
`
