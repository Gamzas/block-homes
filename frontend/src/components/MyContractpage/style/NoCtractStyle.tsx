import styled from 'styled-components'

export const NoMyItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`
export const GuideContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .house {
    width: 10rem;
    height: 10rem;
    opacity: 50%;
  }
  .guide-txt {
    color: #2a2a2a;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 2rem;
  }
`
export const RegisterBtnContainer = styled.div`
  width: 14.0625rem;
  height: 3.25rem;
  border-radius: 0.9375rem;
  background: #845bd3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
  .btn-img {
    width: 2rem;
    height: 2rem;
  }
  .btn-txt {
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 500;
    margin-left: -2rem;
  }
`
