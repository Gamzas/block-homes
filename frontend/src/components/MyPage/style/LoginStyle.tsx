import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f0f7;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: ; */
  padding-top: 7rem;
  .logo-img {
    /* margin-top: 5rem; */
    width: 100%;
  }
`
export const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`

export const LogoContainer = styled.div`
  width: 80%;
  height: fit-content;
  position: relative;
  z-index: 1;
  /* border: 3px solid yellow; */
`

export const CharacterContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 80%;
  top: -4rem;
  right: -3.5rem;
  z-index: 1;

  .pig-character {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .hat {
    position: absolute;
    width: 50%;
    top: 0.1%;
    right: 25%;
    z-index: 2;
    transform: rotate(-10deg);
  }

  .reading-glasses {
    position: absolute;
    width: 50%;
    z-index: 2;
    top: 30%;
    right: 22%;
    transform: rotate(-5deg);
  }
`

export const TextContainer = styled.div`
  /* border: 3px solid red; */
  /* position: absolute; */
  width: 80%;
  bottom: 27rem;
  color: #000;
  text-align: center;
  font-size: 1.01788rem;
  font-weight: 500;
  margin-bottom: 2rem;
  z-index: 1;
  margin-top: 2rem;

  div {
    margin-top: 1rem;
  }
  .bold {
    font-size: 1.01788rem;
    font-weight: 700;
  }
`

export const BtnContainer = styled.div`
  /* position: absolute;
  z-index: 2;
  bottom: 10rem; */
  /* border: 3px solid violet; */
  z-index: 1;
  margin-top: 4rem;
  width: 15rem;
  height: 3.0625rem;
  border-radius: 0.875rem;
  background: #845bd3;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
  }
`
