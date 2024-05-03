import * as r from '@components/SelfCheckDidPage/style/RealEstateTypeInputStyle'
import React, { useState } from 'react'

const RealEstateTypeInput = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [estateType, setEstateType] = useAtom()
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    // setEstateType(e.target.value)
    setIsOpen(false)
  }

  return (
    <r.RealEstateTypeInputContainer>
      <label htmlFor="estateType" className="select-title">
        분류
      </label>
      <select
        className={`select-box ${isOpen ? 'open' : ''}`}
        id="estateType"
        // value={estateType}
        onChange={handleChange}
        onClick={handleToggle}
      >
        <option disabled selected>
          목적물의 유형을 선택해주세요.
        </option>
        <option value="oneRoom">원룸</option>
        <option value="villaOrTowRoom">빌라 · 투룸</option>
        <option value="apartment">아파트</option>
        <option value="offictel">오피스텔</option>
      </select>
    </r.RealEstateTypeInputContainer>
  )
}

export default RealEstateTypeInput
