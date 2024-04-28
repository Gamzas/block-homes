import { useEffect } from 'react'
import * as e from '@components/EstateList/styles/EstateListMapStyle'
import { renderToString } from 'react-dom/server'
import CustomOverlay from '@components/EstateList/CustomOverlay'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import CurrentStatus from './CurrentStatus'

const EstateList = [
  {
    condition: 'normal',
    address: '남동길 30번길 13 3층',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.2057145,
    longitude: 126.8115472,
  },
  {
    condition: 'bad',
    address: '광주광역시 광산구 오선동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '매매',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.205615,
    longitude: 126.812546,
  },
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '월세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204315,
    longitude: 126.812546,
  },
  {
    condition: 'normal',
    address: '남동길 30번길 13 3층',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204615,
    longitude: 126.813546,
  },
  {
    condition: 'bad',
    address: '광주광역시 광산구 오선동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '매매',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.202615,
    longitude: 126.814546,
  },
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '월세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204615,
    longitude: 126.815546,
  },
]

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const EstateListMap = () => {
  const { location, currentPosition, getCurrentLocation } = useCurrentLocation()

  useEffect(() => {
    getCurrentLocation()
  }, [])

  useEffect(() => {
    // 지도생성
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
      animate: true,
    }
    const map = new kakao.maps.Map(container, options)

    // 지도 줌 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(
      location.latitude,
      location.longitude,
    )

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)

    // 커스텀 오버레이 렌더링
    // 오버레이 위치 리스트에 대해 처리
    EstateList.forEach(({ latitude, longitude, condition }) => {
      const position = new kakao.maps.LatLng(latitude, longitude)
      const overlayString = renderToString(
        <CustomOverlay condition={condition} />,
      )

      const customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: overlayString,
        xAnchor: 0.5,
        yAnchor: 0.91,
        clickable : true 
      })

      customOverlay.setMap(map)
      kakao.maps.event.addListener(customOverlay, 'click', function () {
        // 클릭 시 수행할 동작
        console.log('오버레이 클릭!')
      })
    })
  }, [location])

  return (
    <>
      <CurrentStatus
        getCurrentLocation={getCurrentLocation}
        currentPosition={currentPosition}
      />
      <e.EstateMapContainer id="map"></e.EstateMapContainer>
    </>
  )
}

export default EstateListMap
