import styled from 'styled-components'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'

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
    margin-top: 1rem;

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
export const SignInError = styled.div`
    width: 70%;
    height: fit-content;
    margin-top: 0.3rem;
    text-align: right;
    color: red;
    font-size: 0.9rem;
`