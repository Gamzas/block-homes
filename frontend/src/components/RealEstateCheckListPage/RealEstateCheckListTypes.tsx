import React from 'react'
import * as r from '@components/RealEstateCheckListPage/style/RealEstateCheckListTypesStyle'
import { REAL_ESTATE_CHECK_LIST_DATA } from '@constants/RealEstateCheckListData'
import { selectedCheckListTypeIndex } from '@stores/atoms/checkListStore'
import { useAtom } from 'jotai'

const RealEstateCheckListTypes = () => {
  const [, setSelectedTypeIndex] = useAtom(selectedCheckListTypeIndex)
  const selectType = (index: number) => {
    setSelectedTypeIndex(index)
  }

  return (
    <r.RealEstateCheckListTypesContainer>
      {REAL_ESTATE_CHECK_LIST_DATA.map((realEstateCheckListTypeData, index) => (
        <r.RealEstateCheckListType
          key={index}
          onClick={() => selectType(index)}
        >
          <img
            src={realEstateCheckListTypeData.src}
            alt={realEstateCheckListTypeData.title}
            className="real-estate-checklist-type"
          />
          <div className="real-estate-checklist-title">
            {realEstateCheckListTypeData.title}
          </div>
        </r.RealEstateCheckListType>
      ))}
    </r.RealEstateCheckListTypesContainer>
  )
}

export default RealEstateCheckListTypes
