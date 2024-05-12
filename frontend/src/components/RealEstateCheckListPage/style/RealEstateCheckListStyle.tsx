import styled from 'styled-components'

export const RealEstateCheckListContainer = styled.div`
  width: 90%;
  margin: 0 auto 1.5rem auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
`

export const RealEstateCheckListContentContainer = styled.div`
  width: 90%;
  margin: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .checklist-button {
    width: 1.5rem;
    height: 1.5rem;
    appearance: unset;
    background-color: #d9d9d9;
    cursor: pointer;
    border-radius: 0.3rem;
    position: relative;
  }

  .checklist-button:checked {
    background-color: #00adff;
  }

  .checklist-button:checked:before {
    content: '✔';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1rem;
  }

  .checklist-content {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 85%;

    border-radius: 0.6rem;
    background: #fff;
    color: #000;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 1rem;
  }
`
