import * as r from '@pages/style/RealEstateCheckListPageStyle'
import RealEstateCheckListTypes from '@components/RealEstateCheckListPage/RealEstateCheckListTypes'
import RealEstateCheckList from '@components/RealEstateCheckListPage/RealEstateCheckList'

const RealEstateCheckListPage = () => {
  return (
    <r.RealEstateCheckListPageContainer>
      <r.RealEstateCheckListPageHeader>
        <div className="check-list-title">매물 체크리스트</div>
        <div className="check-list-info">
          고려해야 할 사항을 리스트로 만들어두었어요. <br />
          손쉽게 매물의 상태를 파악해보세요!
        </div>
        <img
          alt="체크리스트"
          src="/image/image_check_list.png"
          className="check-list-image"
        />
      </r.RealEstateCheckListPageHeader>
      <RealEstateCheckListTypes />
      <RealEstateCheckList />
    </r.RealEstateCheckListPageContainer>
  )
}

export default RealEstateCheckListPage
