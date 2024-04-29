import styled from 'styled-components'

interface FilterPropsType {
  $isActive?: boolean
  $value?: number
}

// bottom sheet style
export const FilterContainer = styled.div`
  width: 100%;
  height: 60vh;
  flex-shrink: 0;
  border-radius: 30px 30px 0px 0px;
  border-top: 1px solid #cecccc;
  background: #fff;
  padding: 2rem;
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
  width: fit-content;
  height: 2rem;
  font-size: 0.8rem;
  .option-box {
    background-color: #e8e0f7;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    width: 7rem;
    height: 100%;
    line-height: 2rem;
  }
  .option-box2 {
    border-right: 1.5px solid #845bd3;
    border-left: 0.1rem solid #845bd3;
    width: 7rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .option-box3 {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    background-color: #e8e0f7;
    width: 7rem;
    height: 100%;
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
// 옵션
export const SquareFootageSlider = styled.input<FilterPropsType>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 14px;
  border-radius: 10px;
  background: ${props => {
    const percentage = ((Number(props.value) - 1) / 5) * 100
    return `linear-gradient(to right, '#845BD3' 0%, '#845BD3' ${percentage}%, '#FFFFF' ${percentage}%, '#FFFFF' 100%)`
  }};

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    background-color: '#FFFFF';
    border: 1px solid '#845BD3';
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    background-color: '#FFFFF';
    border: 1px solid '#845BD3';
    border-radius: 50%;
    cursor: pointer;
  }
`
export const SliderBar = styled.div`
  width: 100%;
  height: 0.6rem;
  background: #c2b7d8;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .range-circle {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 100%;
    background-color: white;
  }
`

export const InnerSliderBar = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  height: 0.6rem;
  background: #845bd3;
`
export const RangeInputContainer = styled.div`
  position: relative;
`
export const RangeInputMin = styled.input`
  position: absolute;
  top: -1rem;
  width: 100%;
  -webkit-appearance: none;
  pointer-events: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    border: 2px solid #845bd3;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`
export const RangeInputMax = styled(RangeInputMin)``

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
