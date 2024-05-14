import styled, { css, keyframes } from 'styled-components'

interface IconContainerProps {
  $isSelected: boolean
}

const blinkBackgroundAnimation = keyframes`
    0%, 100% {
        opacity: 0.1;
    }
    50% {
        opacity: 1;
    }
`
export const InfoProcessContentContainer = styled.div`
  max-width: 390px;
  width: 100%;
`

export const StepRoadContainer = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  position: relative;
`

export const IconContainer = styled.div<IconContainerProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  background: #845bd3;
  border: 0.15rem solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  img {
    width: 1.9rem;
    height: 1.9rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);

    filter: blur(1px);
    z-index: 1;
  }

  ${props =>
    props.$isSelected &&
    css`
      &::after {
        animation: ${blinkBackgroundAnimation} 1.5s infinite;
      }
    `}
  img {
    width: 1.9rem;
    height: 1.9rem;
  }

  &.icon1 {
    top: 2.4rem;
    left: 5rem;
  }

  &.icon2 {
    top: 2.7rem;
    left: 19rem;
  }

  &.icon3 {
    top: 9rem;
    left: 12rem;
  }

  &.icon4 {
    top: 13rem;
    left: 2.5rem;
  }

  &.icon5 {
    top: 16.2rem;
    left: 15rem;
  }

  &.icon6 {
    top: 23rem;
    left: 12rem;
  }

  &.icon7 {
    top: 25rem;
    left: 2.5rem;
  }

  &.icon8 {
    top: 30rem;
    left: 8rem;
  }

  &.icon9 {
    top: 30rem;
    left: 20rem;
  }
`
