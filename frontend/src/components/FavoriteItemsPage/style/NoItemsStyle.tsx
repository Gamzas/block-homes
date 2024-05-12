import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`
export const ContentContainer = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .txt {
    margin-top: 2rem;
    color: #000;
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 500;
  }
`
export const BtnContainer = styled.div`
  width: 9.8125rem;
  height: 2.25rem;
  border-radius: 0.4375rem;
  background: #845bd3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  .title {
    color: #fff;
    text-align: center;
    font-size: 0.8125rem;
    font-weight: 500;
  }
`
