import styled from 'styled-components'

export const FooterContainer = styled.div`
  border-top: 1px solid #adadad;
  width: 100%;
  max-width: 390px;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  display: flex;
  justify-content: space-around;
`

export const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;

  .footer-component-icon {
    width: 40%;
    padding-bottom: 0.3rem;
  }
`
