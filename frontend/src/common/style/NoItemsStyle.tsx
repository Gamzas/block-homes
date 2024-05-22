import styled from 'styled-components'

export const NoItemContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: calc(100vh - 110px);
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f0f7;
  position: absolute;
`

export const ImageContainer = styled.div`
  width: 15rem;
  z-index: 2;

  img {
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  position: relative;
  top: -3.5rem;

  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  background-color: #d2c5f1;
  padding: 1rem;

  .alarm-text {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  z-index: 1;
`

export const BtnContainer = styled.div`
  width: 10rem;
  height: 3rem;
  border-radius: 0.4375rem;
  background: #845bd3;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
  }
`
