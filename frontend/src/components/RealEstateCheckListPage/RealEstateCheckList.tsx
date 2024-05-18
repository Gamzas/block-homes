import * as r from '@components/RealEstateCheckListPage/style/RealEstateCheckListStyle'
import { useAtom } from 'jotai'
import {
  createCheckListStateAtom,
  selectedCheckListTypeIndex,
} from '@stores/atoms/checkListStore'
import { useParams } from 'react-router-dom'
import React from 'react'

const RealEstateCheckList = () => {
  const { chatRoomNo } = useParams()
  const [selectedCheckListType] = useAtom(selectedCheckListTypeIndex)
  const checkListStateAtom = React.useMemo(
    () => createCheckListStateAtom(Number(chatRoomNo)),
    [chatRoomNo],
  )
  const [checkListState, setCheckListState] = useAtom(checkListStateAtom)

  const handleCheck = (sectionIndex: number, questionIndex: number) => {
    const updatedState = [...checkListState]
    updatedState[sectionIndex].content[questionIndex].checked =
      !updatedState[sectionIndex].content[questionIndex].checked
    setCheckListState(updatedState)
  }

  return (
    <r.RealEstateCheckListContainer>
      {checkListState[selectedCheckListType].content.map(
        (realEstateCheckListContent, index) => (
          <r.RealEstateCheckListContentContainer key={index}>
            <input
              className="checklist-button"
              type="checkbox"
              checked={realEstateCheckListContent.checked}
              onChange={() => handleCheck(selectedCheckListType, index)}
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
