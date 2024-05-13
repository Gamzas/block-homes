import { currentPositonAtom, filterAtom } from '@/stores/atoms/EstateListStore'
import { RealEstateStatusType } from '@/types/estateListType'
import * as c from '@components/EstateList/styles/CurrentStatusStyle'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

interface PropsType {
  getCurrentLocation: () => void
}

const CurrentStatus = (props: PropsType) => {
  const { getCurrentLocation } = props
  const [currentPostion] = useAtom(currentPositonAtom)
  useEffect(() => {}, [currentPostion])
  const [filter, setFilter] = useAtom(filterAtom)
  const EstateStatusList: RealEstateStatusType[] = [
    {
      condition: '우수',
      color1: '#845BD3',
    },
    {
      condition: '보통',
      color1: '#24D0D6',
    },
    {
      condition: '위험',
      color1: '#FE754E',
    },
  ]

  const handleLocationClick = () => {
    getCurrentLocation()
  }
  // 필터 토글
  const handlerFilterClick = () => {
    setFilter(!filter)
  }

  return (
    <c.CurrentStatusContainer>
      <c.CurrentLocationContainer>
        <img
          className="location-icon"
          src="/icon/icon_gpsLocation.png"
          onClick={handleLocationClick}
        />
        <div className="current-location">{currentPostion}</div>
      </c.CurrentLocationContainer>
      <c.EstateStatusButtonContainer>
        {EstateStatusList.map((item, index) => (
          <c.EstateStatusButton key={index} $color={item.color1}>
            {item.condition}
          </c.EstateStatusButton>
        ))}
      </c.EstateStatusButtonContainer>
      <c.FilterContainer onClick={handlerFilterClick}>
        <img className="filter-icon" src="/icon/icon_filter.png" />
        <div className="filter-title">필터</div>
      </c.FilterContainer>
    </c.CurrentStatusContainer>
  )
}

export default CurrentStatus
