import styled from 'styled-components'
import * as color from '@constants/colors'

export const TopCardContainer = styled.div`
    width: 100%;
    height: 220px;
    position: relative;
    background-color: #f3f0f7;
    overflow-x: hidden;
    overflow-y: hidden;
`

export const TopCardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        width: 25%;
        height: auto;
        padding: 1rem;
    }

    .login-btn {
        height: 2rem;
        font-size: 10px;
        background: none;
        text-decoration-line: underline;
        z-index: 100;

        &:hover {
            outline: none;
            border: none;
        }

        &:focus {
            outline: none;
            border: none;
        }
    }
`

export const TopCardInfoTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    z-index: 10;

    .info-text-large {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 2.1rem;
    }

    .info-text-highlight {
        color: ${color.SAFE_HIGHLIGHT};
        font-size: 1.7rem;
        font-weight: 800;
        line-height: 2.1rem;
    }

    .info-text-small {
        font-size: 1rem;
        font-weight: 300;
        padding-top: 1rem;
    }

    white-space: pre-wrap;
`

export const CharacterContainer = styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    bottom: -0.5px;
    right: -20px;

    .pig-character {
        position: absolute;
        width: 200px;
        bottom: 0;
        right: 0;
        z-index: 2;
    }

    .hat {
        position: absolute;
        width: 103px;
        top: -195px;
        right: 53px;
        z-index: 3;
        transform: rotate(-10deg);
    }

    .reading-glasses {
        position: absolute;
        width: 70px;
        bottom: 66px;
        right: 65px;
        z-index: 3;
        transform: rotate(-5deg);
    }

    .map {
        position: absolute;
        width: 140px;
        bottom: -10px;
        left: -230px;
        z-index: 3;
    }
`

export const BackgroundWaveContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    .big-wave {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .small-wave {
        position: absolute;
        bottom: 0;
        left: 0;
    }
`
