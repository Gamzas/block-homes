import styled from 'styled-components'
import * as color from '@constants/colors'

export const IsLoadingContainer = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    padding-bottom: 80px;
    z-index: 10000;
`

export const IsLoadingInfoText = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 60px;

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

    white-space: pre-wrap; /* 줄바꿈과 띄어쓰기 적용 */
`
