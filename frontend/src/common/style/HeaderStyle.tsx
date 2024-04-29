import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 390px;
  height: 50px;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const HeaderLeftContainer = styled.div`
  display: flex;

  .back-arrow {
    padding-right: 1rem;
  }

  .title {
    align-content: center;
    font-size: 1.2rem;
  }
`
