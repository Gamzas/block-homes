import styled from 'styled-components'

export const completePigContainer = styled.div`
  width: 390px;
  height: 250px;
  position: relative;
  overflow: hidden;
  .pig-handsup {
    position: absolute;
    width: 250px;
    height: 250px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
