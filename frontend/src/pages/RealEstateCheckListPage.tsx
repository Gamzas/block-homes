import * as r from '@pages/style/RealEstateCheckListPageStyle'
import RealEstateCheckListTypes from '@components/RealEstateCheckListPage/RealEstateCheckListTypes'

const RealEstateCheckListPage = () => {
  return (
    <r.RealEstateCheckListPageContainer>
      <r.RealEstateCheckListPageHeader>
        <div className="check-list-title">매물 체크리스트</div>
        <div className="check-list-info">
          해당 체크리스트는 임대(매도)인에게도 공유됩니다.
        </div>
        <img
          alt="체크리스트"
          src="/image/image_check_list.png"
          className="check-list-image"
        />
      </r.RealEstateCheckListPageHeader>
      <RealEstateCheckListTypes />
    </r.RealEstateCheckListPageContainer>
  )
}

export default RealEstateCheckListPage
