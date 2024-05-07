import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  background: #845bd3;
  position: relative;
  .user-name {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    margin: 1rem;
    letter-spacing: -0.48px;
    z-index: 1;
  }
  .house-img {
    width: 15rem;
    height: 15rem;
    position: absolute;
    right: 0rem;
    bottom: -1.5rem;
    z-index: 0;
  }
`
