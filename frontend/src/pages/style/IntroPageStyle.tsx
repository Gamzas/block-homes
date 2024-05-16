import styled from 'styled-components'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'

export const IntroPageContainer = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;
`

export const SignInButton = styled(CustomButtonStyle)`
    position: fixed;
    bottom: 4vh;
    left: 50%;
    transform: translateX(-50%);

    &:hover,
    &:active {
        transform: translateX(-50%);
    }
`
