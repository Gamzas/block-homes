import * as f from '@components/EstateList/styles/EstateItemFilterStyle'
import RangeSlider from './RangeSlider'
import { estateFilterAtom, filterAtom } from '@/stores/atoms/EstateListStore'
import { useSetAtom } from 'jotai'
import { useState } from 'react'

const EstateItemFilter = () => {
  const setFilter = useSetAtom(filterAtom)
  const handleFilterContainer = () => {
    setFilter(false)
  }
  const setItemFilter = useSetAtom(estateFilterAtom)
  const [selectedOptions, setSelectedOptions] = useState({
    transactionType: 0,
    minPrice: 0,
    maxPrice: 0,
    minPyeong: 0,
    maxPyeong: 0,
  })

  console.log(selectedOptions)
  const handleOptionClick = (optionType, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [optionType]: value,
    }))
  }

  const goFilter = () => {
    setItemFilter(selectedOptions)
    setFilter(false)
  }
  return (
    <>
      <f.FilterWrapper>
        <div className="close-area" onClick={handleFilterContainer} />
        <f.FilterContainer id="container">
          <f.OptionContainer id="option">
            <div className="option-title">거래형태</div>
            <f.TransactionContainer>
              <div
                className={`option-box ${selectedOptions.transactionType === 1 ? 'selected' : ''}`}
                onClick={() => handleOptionClick('transactionType', 1)}
              >
                월세
              </div>
              <div
                className={`option-box2 ${selectedOptions.transactionType === 2 ? 'selected' : ''}`}
                onClick={() => handleOptionClick('transactionType', 2)}
              >
                전세
              </div>
              <div
                className={`option-box3 ${selectedOptions.transactionType === 3 ? 'selected' : ''}`}
                onClick={() => handleOptionClick('transactionType', 3)}
              >
                매매
              </div>
            </f.TransactionContainer>
          </f.OptionContainer>
          <f.OptionContainer>
            <div className="option-title">금액</div>
            <f.PriceContainer>
              <input
                type="text"
                className="price-box"
                value={selectedOptions.minPrice}
                onChange={e =>
                  setSelectedOptions(prevState => ({
                    ...prevState,
                    minPrice: parseInt(e.target.value) || 0,
                  }))
                }
              />
              <div className="price-text">만원</div>
              <span className="price-text">ㅡ</span>
              <input
                type="text"
                className="price-box"
                value={selectedOptions.maxPrice}
                onChange={e =>
                  setSelectedOptions(prevState => ({
                    ...prevState,
                    maxPrice: parseInt(e.target.value) || 0,
                  }))
                }
              />
              <div className="price-text">만원</div>
            </f.PriceContainer>
          </f.OptionContainer>
          <f.OptionContainer>
            <div className="option-title">면적</div>
            <RangeSlider
              minPyeong={selectedOptions.minPyeong}
              maxPyeong={selectedOptions.maxPyeong}
              setMinPyeong={value =>
                setSelectedOptions(prevState => ({
                  ...prevState,
                  minPyeong: value,
                }))
              }
              setMaxPyeong={value =>
                setSelectedOptions(prevState => ({
                  ...prevState,
                  maxPyeong: value,
                }))
              }
            />
          </f.OptionContainer>
          <f.SelectBtnContainer onClick={goFilter}>
            <div className="search">검색</div>
          </f.SelectBtnContainer>
        </f.FilterContainer>
      </f.FilterWrapper>
    </>
  )
}
export default EstateItemFilter
