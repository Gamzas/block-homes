import styled from 'styled-components'

export const ContractMainContainer = styled.div`
  width: 100%;
  height: 85vh;
`
export const Contract = styled.div`
  position: relative;
  left: 1rem;
  margin-top: 0.3125rem;
  width: 92%;
  height: 64vh;
  border: 0.0625rem solid #f8bbbb;
  background: #fff url('/image/contract.png') no-repeat center center;
  background-size: 100% 100%;
  box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  .content-box {
    margin-left: 4.7rem;
    display: flex;
    margin-top: 2rem;
    width: 7.5rem;
    height: 1rem;
    font-size: 0.7rem;
    font-weight: 600;
    justify-content: space-between;
  }
  .content-box2 {
    display: flex;
    margin-top: 1.34rem;
    margin-left: 3.8rem;
    font-size: 0.6rem;
    font-weight: 600;
    width: 18rem;
    height: 0.8rem;
    text-align: center;
  }
  .content-box3 {
    display: flex;
    justify-content: space-between;
    margin-left: 6.2rem;
    margin-top: 0.25rem;
    width: 14rem;
    height: 0.83rem;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box4 {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
    width: 16.4rem;
    margin-left: 3.8rem;
    height: 0.9rem;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box5 {
    margin-top: 2.3rem;
    width: 16.4rem;
    margin-left: 5rem;
    height: 0.9rem;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box6 {
    margin-top: 0.07rem;
    width: 16.4rem;
    margin-left: 5rem;
    height: 0.9rem;
    font-size: 0.6rem;
    font-weight: 600;
  }
`
