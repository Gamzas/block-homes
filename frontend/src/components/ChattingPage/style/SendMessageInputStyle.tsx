import styled from 'styled-components'

interface IsShowMoreFunctionProps {
  $isShowMoreFunction: boolean
}

export const SendMessageInputContainer = styled.div`
    position: absolute;
    width: 100%;
    max-width: 390px;
    bottom: 0;
    z-index: 100;
    background-color: #ffffff;
`

export const SendMessageInputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 2%;
    height: 60px;

    .message-input {
        width: 78%;
        height: 60%;
        background-color: #f2f3f6;
        border: none;
        padding: 4px 10px;
        border-radius: 10px;

        &:focus {
            outline: none;
        }
    }
`

export const PlusButtonContainer = styled.div<IsShowMoreFunctionProps>`
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;

    &:focus {
        outline: none;
        border: none;
    }

    &:hover {
        outline: none;
        border: none;
    }

    .plus-button {
        width: 1.5rem;
        transition: transform 0.3s ease;
        transform: ${({ $isShowMoreFunction }) =>
                $isShowMoreFunction ? 'rotate(45deg)' : 'rotate(0)'};
    }
`

export const SendButtonContainer = styled.div`
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;

    &:focus {
        outline: none;
        border: none;
    }

    &:hover {
        outline: none;
        border: none;
    }

    .send-button {
        width: 1.5rem;
    }
`

export const MoreFunctionCollectionContainer = styled.div<IsShowMoreFunctionProps>`
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    max-height: ${({ $isShowMoreFunction }) =>
            $isShowMoreFunction
                    ? '200px'
                    : '0'}; // 예시 값, 실제 컨텐츠 크기에 따라 조절 필요
    opacity: ${({ $isShowMoreFunction }) => ($isShowMoreFunction ? '1' : '0')};
`
