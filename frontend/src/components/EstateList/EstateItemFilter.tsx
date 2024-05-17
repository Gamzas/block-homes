import * as f from '@components/EstateList/styles/EstateItemFilterStyle'
import RangeSlider from './RangeSlider'
import { filterAtom } from '@/stores/atoms/EstateListStore'
import { useSetAtom } from 'jotai'

const EstateItemFilter = () => {
  const setFilter = useSetAtom(filterAtom)
  const handleFilterContainer = () => {
    setFilter(false)
  }
  return (
    <>
      {/* <f.FilterBackground /> */}
      <f.FilterWrapper>
        <div className="close-area" onClick={handleFilterContainer} />
        <f.FilterContainer id="container">
          <f.OptionContainer id="option">
            <div className="option-title">거래형태</div>
            <f.TransactionContainer>
              <div className="option-box">매매</div>
              <div className="option-box2">전세</div>
              <div className="option-box3">월세</div>
            </f.TransactionContainer>
          </f.OptionContainer>
          <f.OptionContainer>
            <div className="option-title">금액</div>
            <f.PriceContainer>
              <input type="text" className="price-box" />
              <div className="price-text">만원</div>
              <span className="price-text">ㅡ</span>
              <input type="text" className="price-box" />
              <div className="price-text">만원</div>
            </f.PriceContainer>
          </f.OptionContainer>
          {/* 슬라이더바 */}
          <f.OptionContainer>
            <div className="option-title">면적</div>
            <RangeSlider />
          </f.OptionContainer>
          <f.OptionContainer>
            <div className="option-title">옵션</div>
            <f.TransactionContainer>
              <div className="option-box">냉장고</div>
              <div className="option-box2">에어컨</div>
              <div className="option-box3">세탁기</div>
            </f.TransactionContainer>
          </f.OptionContainer>
          <f.OptionContainer>
            <div className="option-title">상세조건</div>
            <f.DetailContainer>
              <f.DetailOptionBtn $isActive={true}>남향</f.DetailOptionBtn>
              <f.DetailOptionBtn $isActive={false}>역세권</f.DetailOptionBtn>
              <f.DetailOptionBtn $isActive={true}>역세권</f.DetailOptionBtn>
              <f.DetailOptionBtn $isActive={false}>역세권</f.DetailOptionBtn>
              <f.DetailOptionBtn $isActive={true}>역세권</f.DetailOptionBtn>
              <f.DetailOptionBtn $isActive={true}>교육시설</f.DetailOptionBtn>
            </f.DetailContainer>
          </f.OptionContainer>
        </f.FilterContainer>
      </f.FilterWrapper>
    </>
  )
}

export default EstateItemFilter
