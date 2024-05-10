import styled from 'styled-components'

export const RealEstateCategoryContainer = styled.div`
  padding: 1rem;
  margin-top: 0.5rem;

  .real-estate-category-info-text {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    font-weight: 500;
  }
`

export const RealEstateCategories = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const CategoryContainer = styled.div`
  width: 45%;
  height: 125px;
  border-radius: 1rem;
  border: 0.11rem solid #d3c3f0;
  background: #e8e0f7;
  padding: 1rem;
  position: relative;
  margin-bottom: 0.6rem;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);

  .category-img {
    width: 58%;
    position: absolute;
    bottom: 0;
    right: -0.2rem;
  }

  .category-title {
    font-size: 1.2rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
  }

  .category-transaction-type {
    color: #767676;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: normal;
  }
`
