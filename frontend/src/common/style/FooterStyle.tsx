import styled from 'styled-components'

export const FooterContainer = styled.div`
  border-top: 1px solid #adadad;
  width: 100%;
  max-width: 390px;
  height: 62px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  display: flex;
  justify-content: space-around;
`

export const FooterComponent = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  background-color: ${({ $isActive }) => ($isActive ? '#E8E0F7' : '#FFFFFF')};
  padding-bottom: 7px;

  .footer-component-icon {
    width: 25%;
    padding-bottom: 0.3rem;
  }
`
