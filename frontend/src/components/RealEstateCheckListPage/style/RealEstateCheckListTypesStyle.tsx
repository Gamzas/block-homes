import styled from 'styled-components'

export const RealEstateCheckListTypesContainer = styled.div`
  margin: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const RealEstateCheckListType = styled.div`
  width: 4.9rem;
  height: 4.9rem;
  margin: 0.35rem;
  background: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 4.8px 4.8px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .real-estate-checklist-type {
    margin: auto;
    width: 70%;
  }

  .real-estate-checklist-title {
    position: relative;
    font-size: 0.65rem;
    font-weight: 600;
    bottom: 0.5rem;
  }
`
