import * as r from '@components/RealEstateCheckListPage/style/RealEstateCheckListStyle'
import { useAtom } from 'jotai'
import {
  checkListState,
  selectedCheckListTypeIndex,
} from '@stores/atoms/checkListStore'

const RealEstateCheckList = () => {
  const [selectedCheckListType] = useAtom(selectedCheckListTypeIndex)
  const [checkListResult, setCheckListResult] = useAtom(checkListState)

  const updateCheckListResult = (
    sectionIndex: number,
    itemIndex: number,
    isChecked: boolean,
  ) => {
    const newCheckList = [...checkListResult]
    newCheckList[sectionIndex].content[itemIndex].checked = isChecked
    setCheckListResult(newCheckList)
  }

  return (
    <r.RealEstateCheckListContainer>
      {checkListResult[selectedCheckListType].content.map(
        (realEstateCheckListContent, index) => (
          <r.RealEstateCheckListContentContainer key={index}>
            <input
              className="checklist-button"
              type="checkbox"
              checked={realEstateCheckListContent.checked}
              onChange={e =>
                updateCheckListResult(
                  selectedCheckListType,
                  index,
                  e.target.checked,
                )
              }
            />
            <label className="checklist-content">
              {realEstateCheckListContent.question}
            </label>
          </r.RealEstateCheckListContentContainer>
        ),
      )}
    </r.RealEstateCheckListContainer>
  )
}

export default RealEstateCheckList
