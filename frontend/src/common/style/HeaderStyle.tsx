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
    width: 8%;
    margin-top: 0.1rem;
  }
`

export const HeaderLeftContainer = styled.div`
  display: flex;
  width: 92%;

  .back-arrow {
    width: 6%;
    margin: 0.4rem 0.6rem 0.4rem 0;
  }

  .title {
    align-content: center;
    font-size: 1.2rem;
  }

  .right-icon {
    width: 10%;
  }
`
