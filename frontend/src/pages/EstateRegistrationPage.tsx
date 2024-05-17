import * as r from '@pages/style/EstateRegistrationPageStyle'
import Header from '@common/Header'
import AccordionGroup from '@components/EstateRegistrationPage/AccordionGroup'
import { useEffect, useState } from 'react'
import EstateRegistrationComplete from '@components/EstateRegistrationPage/EstateRegistrationComplete'
import { usePostItemRegister } from '@apis/itemApi'
import { useAtomValue } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useLocation } from 'react-router-dom'
import { getCoord } from '@/utils/locationUtil'

const EstateRegistrationPage = () => {
  const buttonNames = ['다음', '매물 등록하기']
  const location = useLocation()
  const realEstateDID = location.state?.realEstateDID
  const realEstateInfoData = location.state?.realEstateInfoData
  const userInfo = useAtomValue(userAtom)
  const postParams = {
    ownerWalletDID: `did:klay:${userInfo.walletAddress}`,
    realEstateDID: 'did:klay:0x0ewfwefqewqfew0',
    latitude: 35.1900186143141,
    longitude: 126.813377377676,
    reportRank: 1,
  }
  const [openIndex, setOpenIndex] = useState(0)
  const [isOpenArray, setIsOpenArray] = useState([true, false, false, false]) // 각 아코디언의 열림 상태 초기화
  const [isComplete, setIsComplete] = useState(false)
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 })
  const [postParams, setPostParams] = useState({
    ownerWalletDID: undefined,
    realEstateDID: undefined,
    latitude: undefined,
    longitude: undefined,
    reportRank: undefined,
  })
  const [checkEstateProps, setCheckEstateProps] = useState({
    roadNameAddress: '광주광역시 광산구 장신로 20번길 13-12',
    realEstateType: 1,
    area: 33,
  })
  const [detailRegistrationProps, setDetailRegistrationProps] = useState({
    transactionType: undefined,
    price: undefined,
    monthlyPrice: undefined,
    administrationCost: undefined,
    contractMonths: undefined,
    administrationFeeCategoryList: undefined,
    moveInDate: undefined,
  })
  const [detailEstateProps, setDetailEstateProps] = useState({
    additionalOptionCategoryList: undefined,
    roomNumber: undefined,
    toiletNumber: undefined,
    description: undefined,
    buildingFloor: undefined,
    itemFloor: undefined,
    parkingRate: undefined,
    haveElevator: true,
  })
  const [photoRegistrationProps, setPhotoRegistrationProps] = useState({
    mainImage: undefined,
    roomImages: [],
    kitchenToiletImages: [],
  })
  const [isNoData, setIsNoData] = useState(true)
  const { mutate: postItemRegisterMutate } = usePostItemRegister()

  const handleAddressSearch = async (address: string) => {
    try {
      const result = await getCoord(address)
      setCoords(result)
    } catch (error) {
      console.error(error.message)
      alert('좌표를 가져오는데 실패했습니다.')
    }
  }

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
      ...postParams,
      ...detailRegistrationProps,
      ...detailEstateProps,
      roadNameAddress: checkEstateProps.roadNameAddress,
      realEstateType: checkEstateProps.realEstateType,
      area: checkEstateProps.area,
    }
    const blob = new Blob([JSON.stringify(reqData)], {
      type: 'application/json',
    })
    formData.append('req', blob)

    if (photoRegistrationProps.mainImage) {
      formData.append('mainImage', photoRegistrationProps.mainImage)
    }
    if (Array.isArray(photoRegistrationProps.roomImages)) {
      photoRegistrationProps.roomImages.forEach(file => {
        formData.append(`roomImages`, file)
      })
    }
    if (Array.isArray(photoRegistrationProps.kitchenToiletImages)) {
      photoRegistrationProps.kitchenToiletImages.forEach(file => {
        formData.append(`kitchenToiletImages`, file)
      })
    }

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

  const handleNextButtonClick = () => {
    switch (openIndex) {
      case 0:
        handleOpenIndex()
        break
      case 1:
        console.log()
        if (isDataFilled(detailRegistrationProps)) handleOpenIndex()
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

  useEffect(() => {
    if (realEstateInfoData) {
      handleAddressSearch(realEstateInfoData.roadNameAddress).then(() =>
        console.log('좌표 가져오기 성공!'),
      )
      setPostParams({
        ownerWalletDID: `did:klay:${userInfo.walletAddress}`,
        realEstateDID: realEstateDID,
        latitude: coords.latitude,
        longitude: coords.longitude,
        reportRank: 1,
      })
      setCheckEstateProps({
        roadNameAddress: realEstateInfoData.roadNameAddress,
        realEstateType: realEstateInfoData.estateType,
        area: realEstateInfoData.area,
        date: realEstateInfoData.date,
        name: userInfo.name,
      })
      setIsNoData(isDataFilled(checkEstateProps))
    }
  }, [realEstateInfoData, userInfo])

  return (
    <r.EstateRegistrationPageContainer>
      {!isNoData && (
        <>
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
        </>
      )}
    </r.EstateRegistrationPageContainer>
  )
}

export default EstateRegistrationPage
