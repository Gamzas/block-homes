import { RealEstateStatusType } from '@/types/realEstateType'
import * as c from '@components/EstateList/styles/CurrentStatusStyle'
import { useEffect } from 'react'

interface PropsType {
  currentPosition: string
  getCurrentLocation: () => void
}

const CurrentStatus = (props: PropsType) => {
  const { getCurrentLocation, currentPosition } = props
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

  useEffect(() => {}, [currentPosition])

  const handleLocationClick = () => {
    getCurrentLocation()
  }

  return (
    <c.CurrentStatusContainer>
      <c.CurrentLocationContainer>
        <img
          className="location-icon"
          src="/icon/icon_gpsLocation.png"
          onClick={handleLocationClick}
        />
        <div className="current-location">{currentPosition}</div>
      </c.CurrentLocationContainer>
      <c.EstateStatusButtonContainer>
        {EstateStatusList.map((item, index) => (
          <c.EstateStatusButton key={index} $color={item.color1}>
            {item.condition}
          </c.EstateStatusButton>
        ))}
      </c.EstateStatusButtonContainer>
      <c.FilterContainer>
        <img className="filter-icon" src="/icon/icon_filter.png" />
        <div className="filter-title">필터</div>
      </c.FilterContainer>
    </c.CurrentStatusContainer>
  )
}

export default CurrentStatus
