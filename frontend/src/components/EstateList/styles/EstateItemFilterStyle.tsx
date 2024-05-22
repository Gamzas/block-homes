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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .option-box.selected,
  .option-box2.selected,
  .option-box3.selected {
    background-color: #d1c4e9; /* 선택된 아이템의 배경색을 변경 */
    color: white; /* 선택된 아이템의 글자색을 변경 */
  }
  .option-box {
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
    height: 2rem;
    padding: 0.25rem 0 0.25rem;
    line-height: 1.5rem;
  }
  .option-box3 {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
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
  input[type='text'] {
    background-color: white; /* 배경색을 흰색으로 설정 */
    color: #757575; /* 텍스트 색상을 검은색으로 설정 */
    border: 1px solid #ccc; /* 테두리 색상 설정 */
    padding: 1rem; /* 패딩 설정 */
    font-size: 1rem; /* 폰트 크기를 16px로 설정 */
    transform: scale(0.75); /* 폰트 크기를 시각적으로 줄이기 위해 변형 */
    transform-origin: left; /* 변형 중심을 왼쪽으로 설정 */
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
// 적용 버튼
export const SelectBtnContainer = styled.div`
  width: 10rem;
  height: 3rem;
  border-radius: 0.875rem;
  background: #845bd3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  .search {
    color: #fff;
    font-feature-settings: 'calt' off;
    font-size: 1rem;
    font-weight: 600;
  }
`
