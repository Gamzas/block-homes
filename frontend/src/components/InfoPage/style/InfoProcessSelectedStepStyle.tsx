import styled from 'styled-components'

export const InfoProcessSelectedStepContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  height: fit-content;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-arrow {
    width: 10%;
    margin: 0.1rem;
  }

  .right-arrow {
    width: 10%;
    transform: rotate(180deg);
    margin: 0.1rem;
  }
`

export const InfoProcessSelectedStepContent = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .icon-container {
    position: relative;
    top: 0;
    width: 2.6rem;
    height: 2.6rem;
    margin: 1rem;
    border-radius: 5rem;
    background: #845bd3;
    border: #fff 0.1rem solid;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      padding: 0.3rem;
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  .detail-container {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`
