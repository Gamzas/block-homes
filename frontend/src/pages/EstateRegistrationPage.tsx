import * as r from '@pages/style/EstateRegistrationPageStyle'
import Header from '@common/Header'
import AccordionGroup from '@components/EstateRegistrationPage/AccordionGroup'
import { useState } from 'react'
import EstateRegistrationComplete from '@components/EstateRegistrationPage/EstateRegistrationComplete'
import { usePostItemRegister } from '@apis/itemApi'

const EstateRegistrationPage = () => {
  const buttonNames = ['다음', '매물 등록하기']
  const [openIndex, setOpenIndex] = useState(0)
  const [isOpenArray, setIsOpenArray] = useState([true, false, false, false]) // 각 아코디언의 열림 상태 초기화
  const [isComplete, setIsComplete] = useState(false)
  const [checkEstateProps, setCheckEstateProps] = useState({
    roadNameAddress: '광주광역시 광산구 장덕동 0000',
    area: 33,
  })
  const [detailRegistrationProps, setDetailRegistrationProps] = useState({
    transactionType: null,
    price: null,
    monthlyPrice: null,
    administrationCost: null,
    administrationFeeCategoryList: null,
    moveInDate: null,
  })
  const [detailEstateProps, setDetailEstateProps] = useState({
    additionalOptionCategoryList: null,
    roomNumber: null,
    toiletNumber: null,
    description: null,
    buildingFloor: null,
    itemFloor: null,
    parkingRate: null,
    haveElevator: true,
  })
  const [photoRegistrationProps, setPhotoRegistrationProps] = useState({
    mainImage: null,
    roomImages: [],
    kitchenToiletImages: [],
  })
  const { mutate: postItemRegisterMutate } = usePostItemRegister()

  const handleOpenIndex = () => {
    const newOpenIndex = openIndex + 1
    setOpenIndex(openIndex + 1)

    // 새로운 상태 배열을 생성하여 현재 인덱스만 true로 설정하고, 나머지는 false로 설정
    const newIsOpenArray = Array(isOpenArray.length).fill(false)
    newIsOpenArray[newOpenIndex] = true

    setIsOpenArray(newIsOpenArray)
  }
  const handleFormSubmit = () => {
    const formData = new FormData()
    const reqData = {
      ...checkEstateProps,
      ...detailRegistrationProps,
      ...detailEstateProps,
    }

    formData.append('req', JSON.stringify(reqData))

    if (photoRegistrationProps.mainImage) {
      formData.append('mainImage', photoRegistrationProps.mainImage)
    }
    photoRegistrationProps.roomImages.forEach((file, index) => {
      formData.append(`roomImages[${index}]`, file)
    })
    photoRegistrationProps.kitchenToiletImages.forEach((file, index) => {
      formData.append(`kitchenToiletImages[${index}]`, file)
    })

    postItemRegisterMutate(formData, {
      onSuccess: () => setIsComplete(true),
      onError: error => {
        console.error('매물 등록 실패:', error)
        alert('매물 등록에 실패했습니다. 다시 시도해주세요.')
      },
    })
  }

  const isDataFilled = data => {
    return Object.values(data).every(value => {
      return value !== null && value !== '' && value !== undefined
    })
  }
  const isValidDateFormat = dateStr => {
    const regex = /^\d{4}\.\d{2}\.\d{2}$/
    return regex.test(dateStr)
  }
  const handleNextButtonClick = () => {
    switch (openIndex) {
      case 0:
        handleOpenIndex()
        break
      case 1:
        console.log()
        if (
          isDataFilled(detailRegistrationProps) &&
          isValidDateFormat(detailRegistrationProps.moveInDate)
        )
          handleOpenIndex()
        break
      case 2:
        if (isDataFilled(detailEstateProps)) handleOpenIndex()
        break
      case 3:
        if (
          isDataFilled(detailRegistrationProps) &&
          isDataFilled(photoRegistrationProps) &&
          isDataFilled(detailEstateProps)
        )
          handleFormSubmit()
        break
    }
  }

  return (
    <r.EstateRegistrationPageContainer>
      <Header title={'매물 등록'} isSearch={false} rightIconSrc={null} />
      {!isComplete ? (
        <>
          <r.AccodionWrapper>
            <AccordionGroup
              maxOpenIndex={openIndex}
              isOpenArray={isOpenArray}
              setIsOpenArray={setIsOpenArray}
              checkEstateProps={checkEstateProps}
              detailRegistrationProps={detailRegistrationProps}
              setDetailRegistrationProps={setDetailRegistrationProps}
              detailEstateProps={detailEstateProps}
              setDetailEstateProps={setDetailEstateProps}
              photoRegistrationProps={photoRegistrationProps}
              setPhotoRegistrationProps={setPhotoRegistrationProps}
            />
          </r.AccodionWrapper>
          <r.NextButton
            onClick={handleNextButtonClick}
            disabled={
              (openIndex === 1 && !isDataFilled(detailRegistrationProps)) ||
              (openIndex === 2 && !isDataFilled(detailEstateProps)) ||
              (openIndex === 3 && !isDataFilled(photoRegistrationProps))
            }
          >
            {openIndex === 3 ? buttonNames[1] : buttonNames[0]}
          </r.NextButton>
        </>
      ) : (
        <EstateRegistrationComplete />
      )}
    </r.EstateRegistrationPageContainer>
  )
}

export default EstateRegistrationPage
