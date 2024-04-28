import * as f from '@components/EstateList/styles/EstateItemFilterStyle'

const EstateItemFilter = () => {
  return (
    <>
      <f.FilterContainer>
        <f.OptionContainer>
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
            <input className="price-box"/>
            <div className="price-text">만원</div>
            <span className="price-text">ㅡ</span>
            <input className="price-box"/>
            <div className="price-text">만원</div>
          </f.PriceContainer>
        </f.OptionContainer>
        <f.OptionContainer>
          <div className="option-title">면적</div>
          <input type='range' />
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
          <f.detailContainer>
            <div className="detail-box">남향</div>
            <div className="detail-box">역세권</div>
            <div className="detail-box">역세권</div>
            <div className="detail-box">역세권</div>
            <div className="detail-box">역세권</div>
            <div className="detail-box">교육시설</div>
          </f.detailContainer>
        </f.OptionContainer>
      </f.FilterContainer>
    </>
  )
}

export default EstateItemFilter
