import styled from 'styled-components'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { CustomToggleButtonStyle } from '@common/style/CustomToggleButtonStyle'

export const SignInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 8rem;

  position: relative;
`

export const SignInWrapper = styled.div`
  width: 70%;
  height: 5rem;
  margin-bottom: 1rem;

  .title {
    width: 100%;
    height: fit-content;
    margin-bottom: 0.5rem;
  }
  .input {
    width: 100%;
    height: fit-content;
    padding: 1rem;
    border: 1px solid #c3c3c3;
    border-radius: 3px;
  }
`

export const SignInButton = styled(CustomButtonStyle)`
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);

  &:hover,
  &:active {
    transform: translateX(-50%);
  }
`
export const SignUpToggleButton = styled(CustomToggleButtonStyle)`
  width: 70%;
  margin-bottom: 1rem;

  .left {
    padding: 4%;
  }

  .right {
    padding: 4%;
  }
`
