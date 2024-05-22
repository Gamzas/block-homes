import styled from 'styled-components'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'

export const IntroPageContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
`

export const SignInButton = styled(CustomButtonStyle)`
  position: fixed;
  bottom: 9vh;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);

  &:hover,
  &:active {
    transform: translateX(-50%);
  }
`

export const NotSignInButton = styled.div`
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);

  border-bottom: 1px solid #a0a0a0;
`
