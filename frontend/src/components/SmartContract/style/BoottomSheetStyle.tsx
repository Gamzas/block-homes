import styled from 'styled-components'

// 바텀
export const ContractBottomContainer = styled.div<{ $height: number }>`
  width: 390px;
  height: ${props => `${props.$height}vh`};
  border-radius: 30px 30px 0px 0px;
  border-top: 1px solid #adadad;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`
