import * as d from '@components/EstateRegistrationPage/style/DetailRegistrationStyle'
import { DetailRegistrationBigInput } from '@components/EstateRegistrationPage/style/DetailRegistrationStyle'
import { useState } from 'react'

const DetailRegistration = ({ detailRegistrationProps, setDetailRegistrationProps }) => {
  const types = ['매매', '전세', '월세']
  const costTypes = ['전기', '가스', '수도', '인터넷', 'TV']
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0)
  const [selectedTypes, setSelectedTypes] = useState(Array(costTypes.length).fill(false))
  const [isNoAdminCost, setIsNoAdminCost] = useState()

  const handleTransactionTypeButtonClick = (index: number) => {
    setDetailRegistrationProps(currentParams => ({
      ...currentParams,
      transactionType: index + 1,
    }))
    setSelectedTypeIndex(index)
  }

  const handleAdministrationFeeCategoryListButtonClick = (index: number) => {
    if (!isNoAdminCost) { // 관리비 없음이 선택되지 않았을 경우에만 작동
      const newSelectedTypes = [...selectedTypes]
      newSelectedTypes[index] = !newSelectedTypes[index]  // 클릭한 버튼의 선택 상태 토글
      setSelectedTypes(newSelectedTypes)  // 새 선택 상태 배열로 업데이트
      // 선택된 인덱스만 추출하여 인덱스 + 1 처리
      const selectedIndices = newSelectedTypes
        .map((selected, idx) => selected ? idx + 1 : null)
        .filter(value => value !== null)

      // 배열을 문자열로 변환하여 상태 업데이트
      const selectedIndicesString = `[${selectedIndices.join(', ')}]`

      setDetailRegistrationProps(currentParams => ({
        ...currentParams,
        administrationFeeCategoryList: selectedIndicesString,
      }))
    }
  }

  // 관리비 없음 체크박스 변경 핸들러
  const handleAdminCostChange = (e) => {
    const isChecked = e.target.checked // 체크 상태를 변수에 저장
    if (isChecked) {
      // 체크박스가 선택된 경우만 상태 업데이트
      setDetailRegistrationProps(currentParams => ({
        ...currentParams,
        administrationCost: 0, // 관리비를 0으로 설정
        administrationFeeCategoryList: [], // 추가 옵션 목록을 빈 배열로 설정
      }))
    }
    setIsNoAdminCost(isChecked)
    setSelectedTypes(isChecked ? Array(costTypes.length).fill(false) : selectedTypes)
  }
  return (
    <d.DetailRegistrationContainer>
      <d.DetailRegistrationSession>
        <div className="title">거래 유형 / 가격</div>
        <d.DetailRegistrationType>
          {types.map((type, index) => (
            <d.DetailRegistrationTypeButton
              key={index}
              $typeNum={3}
              $isSelected={index === selectedTypeIndex}
              onClick={() => handleTransactionTypeButtonClick(index)}
            >
              {type}
            </d.DetailRegistrationTypeButton>
          ))}
        </d.DetailRegistrationType>
        <d.DetailRegistrationWrapperInput>
          <d.DetailRegistrationPricesInput>
            <input
              className="prices-input"
              value={detailRegistrationProps.price}
              onChange={e =>
                setDetailRegistrationProps(currentParams => ({
                  ...currentParams,
                  price: e.target.value,
                }))}
              placeholder="보증금"
            />
            <div className="prices-label">만원</div>
          </d.DetailRegistrationPricesInput>
          <d.DetailRegistrationPricesInput>
            <input
              className="prices-input"
              value={detailRegistrationProps.monthlyPrice}
              onChange={e =>
                setDetailRegistrationProps(currentParams => ({
                  ...currentParams,
                  monthlyPrice: e.target.value,
                }))}
              placeholder="월세"
            />
            <div className="prices-label">만원</div>
          </d.DetailRegistrationPricesInput>
        </d.DetailRegistrationWrapperInput>
      </d.DetailRegistrationSession>
      <d.DetailRegistrationSession>
        <div className="title">관리비</div>
        {!isNoAdminCost && <d.DetailRegistrationType>
          {costTypes.map((costType, index) => (
            <d.DetailRegistrationTypeButton
              key={index}
              $typeNum={5}
              $isSelected={selectedTypes[index]}
              onClick={() => handleAdministrationFeeCategoryListButtonClick(index)}
            >
              {costType}
            </d.DetailRegistrationTypeButton>
          ))}
        </d.DetailRegistrationType>}
        <d.DetailRegistrationWrapperInput>
          {!isNoAdminCost && <d.DetailRegistrationPricesInput>
            <input
              className="prices-input"
              value={detailRegistrationProps.administrationCost}
              onChange={e =>
                setDetailRegistrationProps(currentParams => ({
                  ...currentParams,
                  administrationCost: e.target.value,
                }))}
              placeholder="관리비"
              disabled={isNoAdminCost}
            />
            <div className="prices-label">만원</div>
          </d.DetailRegistrationPricesInput>}
          <d.DetailRegistrationCheckBox>
            <input
              className="check-box"
              type="checkbox"
              checked={isNoAdminCost}
              onChange={handleAdminCostChange}
            />
            관리비 없음
          </d.DetailRegistrationCheckBox>
        </d.DetailRegistrationWrapperInput>
      </d.DetailRegistrationSession>
      <d.DetailRegistrationSession>
        <div className="title">입주가능일</div>
        <DetailRegistrationBigInput
          value={detailRegistrationProps.moveInDate}
          onChange={e =>
            setDetailRegistrationProps(currentParams => ({
              ...currentParams,
              moveInDate: e.target.value,
            }))}
          placeholder="예) 즉시 입주, 날짜 협의, 7월 중"
        />
      </d.DetailRegistrationSession>
    </d.DetailRegistrationContainer>
  )
}

export default DetailRegistration
