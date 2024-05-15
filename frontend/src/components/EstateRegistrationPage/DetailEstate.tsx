import * as d from '@components/EstateRegistrationPage/style/DetailEstateStyle'
import { useState } from 'react'

const DetailEstate = ({ detailEstateProps, setDetailEstateProps }) => {
  const options = [
    '에어컨',
    '냉장고',
    '세탁기',
    '가스레인지',
    '인덕션',
    '전자레인지',
    '책상',
    '책장',
    '침대',
    '옷장',
    '신발장',
    '싱크대',
  ]
  const [isSelected, setIsSelected] = useState(true)
  const [selectedOptions, setSelectedOptions] = useState(
    Array(options.length).fill(false),
  )
  const [isNoParkngRate, setIsNoParkngRate] = useState()

  const adjustHeight = e => {
    e.target.style.height = 'auto' // 높이를 초기화
    e.target.style.height = `${e.target.scrollHeight}px` // 필요한 높이로 설정
  }

  const handleHaveElevatorToggleButtonClick = haveElevator => {
    setIsSelected(haveElevator)
    setDetailEstateProps(currentParams => ({
      ...currentParams,
      haveElevator: haveElevator,
    }))
  }

  const handleHaveElevatorChange = e => {
    const isChecked = e.target.checked // 체크 상태를 변수에 저장
    if (isChecked) {
      // 체크박스가 선택된 경우만 상태 업데이트
      setDetailEstateProps(currentParams => ({
        ...currentParams,
        parkingRate: 0,
      }))
    }
    setIsNoParkngRate(isChecked)
  }

  const handleAdditionalOptionCategoryListButtonClick = index => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[index] = !newSelectedOptions[index] // 클릭한 버튼의 선택 상태 토글
    setSelectedOptions(newSelectedOptions) // 새 선택 상태 배열로 업데이트
    // 선택된 인덱스만 추출하여 인덱스 + 1 처리
    const selectedIndices = newSelectedOptions
      .map((selected, idx) => (selected ? idx + 1 : null))
      .filter(value => value !== null)

    setDetailEstateProps(currentParams => ({
      ...currentParams,
      additionalOptionCategoryList: selectedIndices,
    }))
  }

  return (
    <d.DetailEstateContainer>
      <d.DetailEstateSession>
        <div className="title">층 / 엘리베이터</div>
        <d.DetailEstateWrapperInput>
          <d.DetailEstateInputNumber>
            <div className="title">전체층</div>
            <div className="input-wrapper">
              <input
                className="input-number"
                type="number"
                min="1"
                max="99"
                value={detailEstateProps.buildingFloor}
                onChange={e =>
                  setDetailEstateProps(currentParams => ({
                    ...currentParams,
                    buildingFloor: e.target.value,
                  }))
                }
              />
              <div className="label">층</div>
            </div>
          </d.DetailEstateInputNumber>
          <d.DetailEstateInputNumber>
            <div className="title">해당층</div>
            <div className="input-wrapper">
              <input
                className="input-number"
                type="number"
                min="1"
                max="99"
                value={detailEstateProps.itemFloor}
                onChange={e =>
                  setDetailEstateProps(currentParams => ({
                    ...currentParams,
                    itemFloor: e.target.value,
                  }))
                }
              />
              <div className="label">층</div>
            </div>
          </d.DetailEstateInputNumber>
          <d.DetailEstateToggleButton $isSelected={isSelected}>
            <div
              className="left"
              onClick={() => handleHaveElevatorToggleButtonClick(true)}
            >
              유
            </div>
            <div
              className="right"
              onClick={() => handleHaveElevatorToggleButtonClick(false)}
            >
              무
            </div>
          </d.DetailEstateToggleButton>
        </d.DetailEstateWrapperInput>
      </d.DetailEstateSession>
      <d.DetailEstateSession>
        <div className="title">방 / 화장실 개수</div>
        <d.DetailEstateWrapperInput>
          <d.DetailEstateInputNumber>
            <div className="title">방</div>
            <div className="input-wrapper">
              <input
                className="input-number"
                type="number"
                min="1"
                max="99"
                value={detailEstateProps.roomNumber}
                onChange={e =>
                  setDetailEstateProps(currentParams => ({
                    ...currentParams,
                    roomNumber: e.target.value,
                  }))
                }
              />
              <div className="label">개</div>
            </div>
          </d.DetailEstateInputNumber>
          <d.DetailEstateInputNumber>
            <div className="title">욕실</div>
            <div className="input-wrapper">
              <input
                className="input-number"
                type="number"
                min="1"
                max="99"
                value={detailEstateProps.toiletNumber}
                onChange={e =>
                  setDetailEstateProps(currentParams => ({
                    ...currentParams,
                    toiletNumber: e.target.value,
                  }))
                }
              />
              <div className="label">개</div>
            </div>
          </d.DetailEstateInputNumber>
        </d.DetailEstateWrapperInput>
      </d.DetailEstateSession>
      <d.DetailEstateSession>
        <div className="title">세대당 주차 대수</div>

        <d.DetailEstateWrapperInput>
          {!isNoParkngRate && (
            <d.DetailEstateInputNumber>
              <div className="input-wrapper">
                <input
                  className="input-number"
                  type="number"
                  min="1"
                  max="99"
                  value={detailEstateProps.parkingRate}
                  onChange={e =>
                    setDetailEstateProps(currentParams => ({
                      ...currentParams,
                      parkingRate: e.target.value,
                    }))
                  }
                />
                <div className="label">대</div>
              </div>
            </d.DetailEstateInputNumber>
          )}
          <d.DetailEstateCheckBox>
            <input
              className="check-box"
              type="checkbox"
              checked={isNoParkngRate}
              onChange={handleHaveElevatorChange}
            />
            주차 불가
          </d.DetailEstateCheckBox>
        </d.DetailEstateWrapperInput>
      </d.DetailEstateSession>
      <d.DetailEstateSession>
        <div className="title">상세 옵션</div>
        <d.DetailEstateOptions>
          {options.map((option, index) => (
            <d.DetailEstateOption
              $isSelected={selectedOptions[index]}
              onClick={() =>
                handleAdditionalOptionCategoryListButtonClick(index)
              }
            >
              {option}
            </d.DetailEstateOption>
          ))}
        </d.DetailEstateOptions>
      </d.DetailEstateSession>
      <d.DetailEstateSession>
        <div className="title">상세 설명</div>
        <d.DetailEstateBigInput
          placeholder="매물의 구조, 특징, 주변 시설 등 홍보할 메시지를 입력해주세요."
          onInput={adjustHeight}
          value={detailEstateProps.description}
          onChange={e =>
            setDetailEstateProps(currentParams => ({
              ...currentParams,
              description: e.target.value,
            }))
          }
        />
      </d.DetailEstateSession>
    </d.DetailEstateContainer>
  )
}

export default DetailEstate
