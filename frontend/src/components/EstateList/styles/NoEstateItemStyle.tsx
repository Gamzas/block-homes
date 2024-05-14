import styled from 'styled-components'

export const NoEstateItemWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`
export const ContentContainer = styled.div`
  position: absolute;
  top: 8rem;
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
  }
  .txt {
    margin-top: 2rem;
    color: #000;
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 500;
  }
`
