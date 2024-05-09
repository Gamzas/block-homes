import styled from 'styled-components'

interface FilterPropsType {
  $isActive?: boolean
  $value?: number
}

export const FilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  .close-area {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
  }
`

// bottom sheet style
export const FilterContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: fixed;
  max-width: 390px;
  bottom: 50px;
  z-index: 2;
  border-radius: 30px 30px 0px 0px;
  border-top: 1px solid #cecccc;
  background: #fff;
  padding: 2rem;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`

// 거래형태 및 옵션
export const OptionContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 1rem;
  .option-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }
`
export const TransactionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #d2c5f1;
  color: #845bd3;
  border-radius: 0.8rem;
  width: 100%;
  height: 2rem;
  font-size: 0.8rem;
  .option-box {
    background-color: #e8e0f7;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
  }
  .option-box2 {
    border-right: 1.5px solid #845bd3;
    border-left: 0.1rem solid #845bd3;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .option-box3 {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    background-color: #e8e0f7;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
  }
`

// 금액
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  width: 100%;
  .price-box {
    border-radius: 2px;
    border: 1px solid #808080;
    width: 6rem;
    height: 1.6rem;
  }
  .price-text {
    font-size: 0.6rem;
    line-height: 2.2rem;
  }
`
// 상세조건

export const DetailContainer = styled.div`
  display: flex;
  width: 100%;
`

export const DetailOptionBtn = styled.div<FilterPropsType>`
  font-size: 0.6rem;
  padding: 0.5rem;
  width: fit-content;
  border-radius: 1rem;
  border: 1px solid #845bd3;
  background: ${props => (props.$isActive ? `#FFFFFF` : `#f3f0f7`)};
  margin-right: 0.5rem;
`
