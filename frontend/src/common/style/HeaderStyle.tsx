import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #adadad;
  width: 100%;
  max-width: 390px;
  height: 50px;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;

  .right-icon {
    margin: 0.4rem;
  }
`

export const HeaderLeftContainer = styled.div`
  display: flex;
  width: 100%;

  .back-arrow {
    padding-right: 0.5rem;
    margin: 0.4rem;
  }

  .title {
    align-content: center;
    font-size: 1.2rem;
  }
`
