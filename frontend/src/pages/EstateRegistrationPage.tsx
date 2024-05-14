import * as r from '@pages/style/EstateRegistrationPageStyle'
import Header from '@common/Header'
import AccordionGroup from '@components/EstateRegistrationPage/AccordionGroup'
import { useState } from 'react'
import EstateRegistrationComplete from '@components/EstateRegistrationPage/EstateRegistrationComplete'

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
    transactionType: 0,
    price: 0,
    monthlyPrice: 0,
    administrationCost: 0,
    administrationFeeCategoryList: '',
    moveInDate: '',
  })
  const [detailEstateProps, setDetailEstateProps] = useState({
    additionalOptionCategoryList: '',
    roomNumber: 0,
    toiletNumber: 0,
    description: '',
    buildingFloor: 0,
    itemFloor: 0,
    parkingRate: 0,
    haveElevator: false,
  })
  const [photoRegistrationProps, setPhotoRegistrationProps] = useState({
      mainImage: '',
      roomImages: [],
      kitchenToiletImages: [],
    },
  )


  const handleNextButtonClick = () => {
    if (openIndex < 3) { // 마지막 아코디언이 아니면
      const newOpenIndex = openIndex + 1
      setOpenIndex(newOpenIndex)

      // 새로운 상태 배열을 생성하여 현재 인덱스만 true로 설정하고, 나머지는 false로 설정
      const newIsOpenArray = Array(isOpenArray.length).fill(false)
      newIsOpenArray[newOpenIndex] = true

      setIsOpenArray(newIsOpenArray)
    } else {
      setIsComplete(true)
    }
  }

  return (
    <r.EstateRegistrationPageContainer>
      <Header
        title={'매물 등록'}
        isSearch={false}
        rightIconSrc={null}
      />
      {!isComplete ?
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
          <r.NextButton onClick={handleNextButtonClick}>
            {openIndex === 3 ? buttonNames[1] : buttonNames[0]}
          </r.NextButton>
        </> :
        <EstateRegistrationComplete />
      }
    </r.EstateRegistrationPageContainer>
  )
}

export default EstateRegistrationPage
