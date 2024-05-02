import styled from 'styled-components'

export const SafetyCardContainer = styled.div`
  width: 90%;
  height: 7rem;
  border-radius: 1.3rem;
  background: #e9f7f7;
`
export const ImgContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 5rem;
  .pig-img {
    position: relative;
    width: 5rem;
    height: 5rem;
  }
  .alert-img {
    width: 4rem;
    height: 4rem;
    position: absolute;
    left: 2.5rem;
    z-index: 0;
  }
`
