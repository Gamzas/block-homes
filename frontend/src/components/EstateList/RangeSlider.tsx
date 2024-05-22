import * as r from '@components/EstateList/styles/RangeSliderStyle'
import { useEffect, useState } from 'react'

const RangeSlider = ({ minPyeong, maxPyeong, setMinPyeong, setMaxPyeong }) => {
  const [minValue, setMinValue] = useState(10)
  const [maxValue, setMaxValue] = useState(60)
  const [minPercent, setMinPercent] = useState(0)
  const [maxPercent, setMaxPercent] = useState(0)
  const circles = Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="range-circle"></div>
  ))
  const areas = Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="area-text">
      {(index + 1) * 10} 평
    </div>
  ))

  useEffect(() => {
    if (minValue == 10 && maxValue == 60) {
      setMinPyeong(0)
      setMaxPyeong(0)
    } else if (minValue == 10 && maxValue == 10) {
      setMinPyeong(0)
      setMaxPyeong(maxValue)
    } else if (minValue == 60 && maxValue == 60) {
      setMinPyeong(60)
      setMaxPyeong(0)
    } else {
      setMinPyeong(minValue)
      setMaxPyeong(maxValue)
    }
    setMinPercent(((minValue - 10) / 50) * 100)
    setMaxPercent(((60 - maxValue) / 50) * 100)
  }, [minValue, maxValue])

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

  // 최댓값, 최솟값 역전 방지
  const RangeHandler = () => {}

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
          value={minValue}
          onChange={e => {
            areaMinRangeHandler(e)
            RangeHandler()
          }}
        />
        <r.RangeInputMax
          type="range"
          min={10}
          max={60}
          step={10}
          value={maxValue}
          onChange={e => {
            areaMaxRangeHandler(e)
            RangeHandler()
          }}
        />
      </r.RangeInputContainer>
    </>
  )
}

export default RangeSlider
