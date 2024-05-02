import styled from 'styled-components'
import {Button} from "@common/style/Button";

export const RegistrateEstatePageStyleContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const NextButton = styled(Button)`
    position: fixed;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);

    &:hover,
    &:active {
        transform: translateX(-50%);
    }
`
