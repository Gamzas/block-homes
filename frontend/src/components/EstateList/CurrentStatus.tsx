import useCurrentLocation from '@/hooks/useCurrentLocation'
import {
  currentCoordAtom,
  currentPositonAtom,
  filterAtom,
} from '@/stores/atoms/EstateListStore'
import { RealEstateStatusType } from '@/types/estateListType'
import * as c from '@components/EstateList/styles/CurrentStatusStyle'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

interface PropsType {
  getCurrentLocation: () => void
}

const CurrentStatus = (props: PropsType) => {
  const { getCurrentLocation } = props
  const { location, match } = useCurrentLocation()
  const [coord] = useAtom(currentCoordAtom)
  const [coordMatch, setCoordMatch] = useState(false)

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
  // 좌표 일치 여부 확인
  const checkCoordinatesMatch = (coord, location) => {
    return (
      coord.latitude === location.latitude &&
      coord.longitude === location.longitude
    )
  }
  // useEffect(() => {
  //   const isMatch = checkCoordinatesMatch(coord, location)
  //   setMatch(isMatch)
  //   console.log('Coordinate match:', isMatch)
  // }, [coord, location])

  useEffect(() => {
    console.log('상태바', match)
  }, [match])
  return (
    <c.CurrentStatusContainer>
      <c.CurrentLocationContainer>
        <div className="location-icon" onClick={handleLocationClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gps">
            <g>
              <path
                fill={match ? '#1e88e5' : '#606060'}
                d="M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,12,11Z"
              ></path>
              <path
                fill={match ? '#90caf9' : '#babdbf'}
                d="M21,11H19.93A8,8,0,0,0,13,4.07V3a1,1,0,0,0-2,0V4.07A8,8,0,0,0,4.07,11H3a1,1,0,0,0,0,2H4.07A8,8,0,0,0,11,19.93V21a1,1,0,0,0,2,0V19.93A8,8,0,0,0,19.93,13H21a1,1,0,0,0,0-2Zm-8,6.91V17a1,1,0,0,0-2,0v.91A6,6,0,0,1,6.09,13H7a1,1,0,0,0,0-2H6.09A6,6,0,0,1,11,6.09V7a1,1,0,0,0,2,0V6.09A6,6,0,0,1,17.91,11H17a1,1,0,0,0,0,2h.91A6,6,0,0,1,13,17.91Z"
              ></path>
            </g>
          </svg>
        </div>
        {/* <img
          className="location-icon"
          src="/icon/icon_gpsLocation.png"
          onClick={handleLocationClick}
        /> */}
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
