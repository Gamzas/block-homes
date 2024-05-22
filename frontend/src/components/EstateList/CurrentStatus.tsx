import { useGetEstateItems } from '@/apis/itemApi'
import ItemLoading from '@/common/ItemLoading'
import NoItems from '@/common/NoItems'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import {
  currentCoordAtom,
  currentPositonAtom,
  estateFilterAtom,
  estateItemListAtom,
  filterAtom,
  mapCenterCoordAtom,
  matchAtom,
  reportAtom,
  selectedItemAtom,
  userCoordAtom,
} from '@/stores/atoms/EstateListStore'
import {
  RealEstateStatusType,
  ReqCoordType,
} from '@/types/components/estateListType'
import { calculateBoundaries, calculateDistance } from '@/utils/locationUtil'
import * as c from '@components/EstateList/styles/CurrentStatusStyle'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

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

const CurrentStatus = ({ handleLocationClick }) => {
  const { category } = useParams()
  // 현재 위치 호출하는 함수
  const { getCurrentLocation } = useCurrentLocation()
  // 해당하는 범위의 부동산 매물 조회 함수
  const setItem = useSetAtom(estateItemListAtom)
  // 지도 중심과 사용자 현재 위치 일치 여부 확인
  const [match] = useAtom(matchAtom)
  // 사용자 현재 위치
  const [userCoord] = useAtom(userCoordAtom)
  // 지도 중심 좌표
  const [mapCenterCoord] = useAtom(mapCenterCoordAtom)
  // 마커 좌표
  const [markerCoord] = useAtom(currentCoordAtom)
  // 필터 항목
  const [itemFilter] = useAtom(estateFilterAtom)
  // 레포트 필터 항목
  const [reportFilter, setReportFilter] = useAtom(reportAtom)
  const setItemFilter = useSetAtom(estateFilterAtom)
  // 필터 토글
  const setFilterToggle = useSetAtom(filterAtom)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const boundaries = calculateBoundaries(
    markerCoord.latitude,
    markerCoord.longitude,
    5,
  )
  const [currentBoundary, setCurrentBoundary] =
    useState<ReqCoordType>(boundaries)
  const initialCenterRef = useRef({
    latitude: markerCoord.latitude,
    longitude: markerCoord.longitude,
  })
  const [distanceMoved, setDistanceMoved] = useState(0)

  useEffect(() => {
    const boundary = calculateBoundaries(
      markerCoord.latitude,
      markerCoord.longitude,
      5,
    )
    setCurrentBoundary(boundary)
  }, [mapCenterCoord])
  //-------------------------------------------------------------------------------------
  // const { data, isLoading, error } = useGetEstateItems(
  //   Number(category),
  //   itemFilter,
  //   {
  //     northEastLatitude: 35.20793645842205,
  //     northEastLongitude: 126.8243731285463,
  //     southWestLatitude: 35.167213022923335,
  //     southWestLongitude: 126.79021349478826,
  //   },
  // )

  // 현재 위치 이름
  const [currentPostion] = useAtom(currentPositonAtom)
  useEffect(() => {}, [currentPostion])
  const [filter, setFilter] = useAtom(filterAtom)

  // status 초기 렌더링 시 사용자 위치 가져오기
  useEffect(() => {
    getCurrentLocation()
  }, [])
  useEffect(() => {}, [match])

  // 필터 토글
  const handlerFilterClick = () => {
    setFilter(!filter)
  }

  // 레포트 등급별 출력
  const reportFiltering = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
      setReportFilter(0)
    } else {
      setActiveIndex(index)
      setReportFilter(index + 1)
    }
  }

  const reset = () => {
    setItemFilter({
      transactionType: 0,
      minPrice: 0,
      maxPrice: 0,
      minPyeong: 0,
      maxPyeong: 0,
    })
    setReportFilter(0)
    setActiveIndex(null)
    setFilterToggle(false)
  }

  useEffect(() => {
    const distance = calculateDistance(
      initialCenterRef.current.latitude,
      initialCenterRef.current.longitude,
      mapCenterCoord.latitude,
      mapCenterCoord.longitude,
    )
    setDistanceMoved(distance)
    if (distance >= 2.5) {
      const newBoundary = calculateBoundaries(
        mapCenterCoord.latitude,
        mapCenterCoord.longitude,
        5,
      )
      setCurrentBoundary(newBoundary)
      initialCenterRef.current = { ...mapCenterCoord }
    }
  }, [mapCenterCoord])

  const { data, isLoading, error } = useGetEstateItems(
    Number(category),
    reportFilter,
    itemFilter,
    currentBoundary,
    setItem,
  )

  if (isLoading) {
    return <ItemLoading />
  }

  if (error || !data) {
    return (
      <NoItems
        src={'/image/image_warning_pig.png'}
        alarmText={'데이터를 불러오는 중 오류가 발생했습니다.'}
      />
    )
  }
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
        <div className="current-location">{currentPostion}</div>
      </c.CurrentLocationContainer>
      <c.EstateStatusButtonContainer>
        {EstateStatusList.map((item, index) => (
          <c.EstateStatusButton
            key={index}
            $color={item.color1}
            $active={activeIndex === index}
            onClick={() => reportFiltering(index)}
          >
            {item.condition}
          </c.EstateStatusButton>
        ))}
        <img
          className="reset"
          src="/icon/icon_reset.png"
          alt="리셋"
          onClick={reset}
        />
      </c.EstateStatusButtonContainer>
      <c.FilterContainer onClick={handlerFilterClick}>
        <img className="filter-icon" src="/icon/icon_filter.png" />
        <div className="filter-title">필터</div>
      </c.FilterContainer>
    </c.CurrentStatusContainer>
  )
}

export default CurrentStatus
