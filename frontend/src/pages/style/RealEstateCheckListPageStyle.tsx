import styled from 'styled-components'

export const RealEstateCheckListPageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #e6f7ff;
`

export const RealEstateCheckListPageHeader = styled.div`
  margin: 2.6rem 2.3rem;

  .check-list-title {
    color: #00adff;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    margin-bottom: 1rem;
  }

  .check-list-info {
    color: #000;
    font-size: 0.8rem;
    line-height: 1.3rem;
    margin: 0.5rem 0.2rem;
  }

  .check-list-image {
    position: absolute;
    width: 13rem;
    top: -3.5rem;
    right: -2.5rem;
  }
`
