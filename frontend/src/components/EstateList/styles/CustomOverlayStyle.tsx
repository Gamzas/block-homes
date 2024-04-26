import styled from 'styled-components'

export const EstateItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 3rem;
  height: 3rem;
  position: relative;
  .circle {
    border-radius: 100%;
    background-color: #24d0d6;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .inner-circle {
    background-color: #e9f7f7;
    border-radius: 100%;
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .estate-sign {
    color: #24d0d6;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2.2rem;
  }
`
