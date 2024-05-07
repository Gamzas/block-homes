import * as l from '@components/EstateDetailPage/style/LocationStyle'
import { useEffect } from 'react'

const { kakao } = window

const Location = () => {
  const location = { latitude: 35.204315, longitude: 126.812546 }
  const position = '광주광역시 광산구 장덕 30번길 13'
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
      animate: true,
    }

    const map = new kakao.maps.Map(container, options)

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(
      location.latitude,
      location.longitude,
    )

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  }, [])
  return (
    <l.DetailLocationContainer>
      <l.Position>{position}</l.Position>
      <l.MapContainer id="map" />
    </l.DetailLocationContainer>
  )
}

export default Location
