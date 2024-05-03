import styled from 'styled-components'

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
  width: 100%;
  padding: 0 8%;
  position: relative;
  z-index: 10;

  .main-info-text {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  .info-report {
    font-size: 0.7rem;
    text-decoration-line: underline;
    margin-top: 1rem;
  }

  .bold-text {
    font-weight: 700;
  }
`

export const CharacterContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 80%;
  bottom: -0.5rem;
  right: -0.5rem;

  .pig-character {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: -2rem;
    z-index: 2;
  }

  .hat {
    position: absolute;
    width: 6.2rem;
    top: -0.5rem;
    right: 1.8rem;
    z-index: 2;
    transform: rotate(-10deg);
  }

  .reading-glasses {
    position: absolute;
    width: 6.2rem;
    bottom: 3rem;
    right: 1.2rem;
    z-index: 2;
    transform: rotate(-5deg);
  }

  .map {
    position: absolute;
    width: 11rem;
    bottom: -1rem;
    left: -2.5rem;
    z-index: 1;
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
