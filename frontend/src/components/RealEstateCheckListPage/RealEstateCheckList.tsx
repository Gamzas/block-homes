import * as r from '@components/RealEstateCheckListPage/style/RealEstateCheckListStyle'
import { useAtom } from 'jotai'
import { selectedCheckListTypeIndex } from '@stores/atoms/checkListStore'
import { REAL_ESTATE_CHECK_LIST_DATA } from '@constants/RealEstateCheckListData'

const RealEstateCheckList = () => {
  const [selectedCheckListType] = useAtom(selectedCheckListTypeIndex)

  return (
    <r.RealEstateCheckListContainer>
      {REAL_ESTATE_CHECK_LIST_DATA[selectedCheckListType].content.map(
        (realEstateCheckListContent, index) => (
          <r.RealEstateCheckListContentContainer key={index}>
            <input className="checklist-button" type="checkbox" />
            <label className="checklist-content">
              {realEstateCheckListContent}
            </label>
          </r.RealEstateCheckListContentContainer>
        ),
      )}
    </r.RealEstateCheckListContainer>
  )
}

export default RealEstateCheckList
