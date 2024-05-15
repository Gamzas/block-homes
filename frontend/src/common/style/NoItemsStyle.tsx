import styled from 'styled-components'

interface ImageContainerProps {
  $isSad: boolean
}

export const NoItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f0f7;
`

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 15rem;
  position: absolute;
  top: ${props => (props.$isSad ? '11.5rem' : '8.5rem')};

  img {
    width: 100%;
  }
`

export const ContentContainer = styled.div`
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
