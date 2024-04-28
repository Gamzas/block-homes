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
  padding: 40px 0;

 .understand-text{
  width:267px;
  color: black;
  font-weight:600;
  font-size:23px;
  margin-top:44px;
 }

 .understand-text-second{
  width:280px;
  color: #CFC3C3;
  font-weight:600;
  font-size:16px;
  margin:45px 0;
 }

 .agree-text{
  margin-top:10px;
  margin-bottom:40px;

  width:267px;
  color: black;
  font-weight:600;
  font-size:18px;
 }



`
