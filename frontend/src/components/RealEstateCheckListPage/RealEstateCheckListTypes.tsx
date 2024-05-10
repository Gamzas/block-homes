import React from 'react'
import * as r from '@components/RealEstateCheckListPage/style/RealEstateCheckListTypesStyle'

const RealEstateCheckListTypes = () => {
  const realEstateCheckListTypesData = [
    {
      src: '/image/image_check_list_supply_drainage.png',
      title: '수도와 배수',
    },
    {
      src: '/image/image_check_list_washroom.png',
      title: '화장실',
    },
    {
      src: '/image/image_check_list_window.png',
      title: '창문',
    },
    {
      src: '/image/image_check_list_options.png',
      title: '기본 옵션',
    },
    {
      src: '/image/image_check_list_details.png',
      title: '디테일',
    },
    {
      src: '/image/image_check_list_surround.png',
      title: '주변 환경',
    },
    {
      src: '/image/image_check_list_security.png',
      title: '보안',
    },
    {
      src: '/image/image_check_list_etc.png',
      title: '기타',
    },
  ]

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
