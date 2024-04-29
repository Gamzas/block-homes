import * as r from '@components/EstateList/styles/RangeSliderStyle'
import { useState } from 'react'

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(10)
  const [maxValue, setMaxValue] = useState(60)
  const [minPercent, setMinPercent] = useState(0)
  const [maxPercent, setMaxPercent] = useState(0)
  console.log(minPercent, maxPercent)
  const circles = Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="range-circle"></div>
  ))
  const areas = Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="area-text">
      {(index + 1) * 10} 평
    </div>
  ))

  const areaMinRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setMinValue(value)
    setMinPercent(((value - 10) / 5) * 10)
  }
  const areaMaxRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setMaxValue(value)
    setMaxPercent(((60 - value) / 5) * 10)
  }

  return (
    <>
      <r.SliderBar>
        {circles}
        <r.InnerSliderBar $minValue={minPercent} $maxValue={maxPercent} />
      </r.SliderBar>
      <r.SliderRangeTextContainer>{areas}</r.SliderRangeTextContainer>
      <r.RangeInputContainer>
        <r.RangeInputMin
          type="range"
          min={10}
          max={60}
          step={10}
          onChange={e => areaMinRangeHandler(e)}
        />
        <r.RangeInputMax
          type="range"
          min={10}
          max={60}
          step={10}
          onChange={e => areaMaxRangeHandler(e)}
        />
      </r.RangeInputContainer>
    </>
  )
}

export default RangeSlider
