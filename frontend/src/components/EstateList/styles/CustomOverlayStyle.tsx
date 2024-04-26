import styled from 'styled-components'

export const EstateItem = styled.div`
  border: 1px solid black;
  width: 35px;
  height: 35px;
  position: relative;
  .circle {
    border: 1px solid black;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .inner-circle {
    border: 1px solid black;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
