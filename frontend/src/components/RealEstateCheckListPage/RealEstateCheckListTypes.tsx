import React from 'react'
import * as r from '@components/RealEstateCheckListPage/style/RealEstateCheckListTypesStyle'
import { REAL_ESTATE_CHECK_LIST_DATA } from '@constants/RealEstateCheckListData'

const RealEstateCheckListTypes = () => {
  const realEstateCheckListTypesData = REAL_ESTATE_CHECK_LIST_DATA

  const selectType = (index: number) => {
    console.log(index)
  }

  return (
    <r.RealEstateCheckListTypesContainer>
      {realEstateCheckListTypesData.map(
        (realEstateCheckListTypeData, index) => (
          <r.RealEstateCheckListType onClick={() => selectType(index)}>
            <img
              src={realEstateCheckListTypeData.src}
              alt={realEstateCheckListTypeData.title}
              className="real-estate-checklist-type"
            />
            <div className="real-estate-checklist-title">
              {realEstateCheckListTypeData.title}
            </div>
          </r.RealEstateCheckListType>
        ),
      )}
    </r.RealEstateCheckListTypesContainer>
  )
}

export default RealEstateCheckListTypes
