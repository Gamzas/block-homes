import styled from 'styled-components'

export const FooterContainer = styled.div`
  border-top: 1px solid #adadad;
  width: 390px;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  display: flex;
  justify-content: space-around;
`
// 바텀
export const ContractBottomContainer = styled.div<{
  $height: number
  $isVisible: boolean
}>`
  width: 390px;
  height: ${props => `${props.$height}vh`};
  transform: translateY(${props => (props.$isVisible ? '0' : '100%')});
  transition:
    transform 0.1s ease-out,
    height 0.3s ease-in-out;
  border-radius: 30px 30px 0px 0px;
  border-top: 1px solid #adadad;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  .understand-text {
    width: 267px;
    color: black;
    font-weight: 600;
    font-size: 20px;
    margin-top: 44px;
    text-align: center;
  }

  .understand-text-second {
    width: 280px;
    color: #cfc3c3;
    font-weight: 600;
    font-size: 15px;
    margin: 45px 0;
  }

  .agree-text {
    margin-top: 10px;
    margin-bottom: 40px;

    width: 267px;
    color: black;
    font-weight: 600;
    font-size: 18px;
  }
`
