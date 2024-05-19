import styled from 'styled-components'

export const ContractMainContainer = styled.div`
  width: 100%;
  height: 85vh;
  border: 1px solid;
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
    margin-top: 10%;
    width: 7.5rem;
    height: 3.4%;
    font-size: 0.7rem;
    font-weight: 600;
    /* border: 1px solid black; */
    justify-content: space-between;
  }
  .content-box2 {
    display: flex;
    margin-top: 4%;
    margin-left: 3.8rem;
    font-size: 0.6rem;
    font-weight: 600;
    width: 18rem;
    height: 3%;
    text-align: center;
  }
  .content-box3 {
    display: flex;
    justify-content: space-between;
    margin-left: 6.2rem;
    margin-top: 1%;
    width: 14rem;
    height: 1%;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box4 {
    display: flex;
    justify-content: space-between;
    margin-top: 4%;
    width: 16.4rem;
    margin-left: 3.8rem;
    height: 2%;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box5 {
    margin-top: 10%;
    width: 16.4rem;
    margin-left: 5rem;
    height: 3%;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box6 {
    margin-top: 0.2%;
    width: 16.4rem;
    margin-left: 5rem;
    height: 1%;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .content-box7 {
    display: flex;
    margin-top: 3%;
    width: 5rem;
    margin-left: 17.5rem;
    height: 1%;
    font-size: 0.6rem;
    font-weight: 600;
    justify-content: space-between;
  }
  .content-box8 {
    display: flex;
    margin-top: 1.5%;
    width: 5rem;
    margin-left: 11rem;
    height: 0.9rem;
    font-size: 0.6rem;
    font-weight: 600;
    justify-content: space-between;
  }
`
