import styled from 'styled-components'

interface SliderPropsType {
  $minValue?: number
  $maxValue?: number
}

// 옵션

export const SliderBar = styled.div`
  width: 100%;
  height: 0.6rem;
  background: #c2b7d8;
  border-radius: 0.4rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .range-circle {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 100%;
    background-color: white;
    z-index: 1;
  }
`
export const SliderRangeTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  .area-text {
    font-size: 0.7rem;
    font-weight: 500;
  }
`

export const InnerSliderBar = styled.div<SliderPropsType>`
  position: absolute;
  left: ${props => props.$minValue}%;
  right: ${props => props.$maxValue}%;
  height: 0.6rem;
  background: #845bd3;
  border-radius: 0.4rem;
`
export const RangeInputContainer = styled.div`
  position: relative;
  z-index: 2;
`
export const RangeInputMin = styled.input`
  position: absolute;
  top: -2.5rem;
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
