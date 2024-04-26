import { useEffect, useState } from 'react'
import * as e from '@components/EstateList/styles/EstateListMapStyle'
import { renderToString } from 'react-dom/server'
import CustomOverlay from '@components/EstateList/CustomOverlay'

//data
// const locationList = [
//   {
//     latitude: 35.2057145,
//     longitude: 126.8115472,
//   },
//   {
//     latitude: 36.2057145,
//     longitude: 126.8115472,
//   },
// ]
//

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const EstateListMap = () => {
  const [location, setLocation] = useState({
    latitude: 37.365264512305174,
    longitude: 127.10676860117488,
  })
  const [currentPosition, setCurrentPosition] = useState(null)
  // 위치권한설정 및 현재위치 설정
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
  }, [])

  const successHandler = (res: GeolocationPosition) => {
    // console.log(res)
    const { latitude, longitude } = res.coords
    setLocation({ latitude, longitude })
  }
  const errorHandler = (err: GeolocationPositionError) => {
    console.log(err)
  }

  // 매물 지도
  useEffect(() => {
    // 지도생성
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
      animate: true,
    }
    const map = new kakao.maps.Map(container, options)
    // 좌표 => 주소 변환
    const getAddress = (lat, lng) => {
      const geocoder = new kakao.maps.services.Geocoder()
      const coord = new kakao.maps.LatLng(lat, lng)
      const callback = (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          console.log(result)
          setCurrentPosition(result[0].address.region_3depth_name)
        }
      }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
    }
    getAddress(location.latitude, location.longitude)
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

    // 커스텀 오버레이
    const overlayString = renderToString(<CustomOverlay />)

    const customOverlay = new kakao.maps.CustomOverlay({
      position: markerPosition,
      content: overlayString,
      xAnchor: 0.5,
      yAnchor: 0.91,
    })

    customOverlay.setMap(map)
  }, [location])

  return (
    <>
      <e.EstateMapContainer id="map">
        <e.CurrentLocationContainer>
          <img className="location-icon" src="/icon/icon_gpsLocation.png"></img>
          <div className="current-location">{currentPosition}</div>
        </e.CurrentLocationContainer>
      </e.EstateMapContainer>
    </>
  )
}

export default EstateListMap
