import { GeocoderResult, KakaoMapsStatus } from '@/types/kakaomapType'
import * as l from '@components/EstateDetailPage/style/LocationStyle'
import { useEffect, useState } from 'react'

const { kakao } = window

interface PropType {
  latitude: number
  longitude: number
}

const Location = (props: PropType) => {
  const { latitude, longitude } = props
  const [position, setPosition] = useState<string>()
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
      animate: true,
    }

    const map = new kakao.maps.Map(container, options)

    // DELETE 주석 삭제하기
    // 마커 이미지 설정
    const imageSrc = '/image/image_map_marker.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 64), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(32, 32) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    )

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(latitude, longitude)

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    })
    marker.setMap(map)

    // 좌표 => 주소 변환
    const getAddress = (lat: number, lng: number) => {
      const geocoder = new kakao.maps.services.Geocoder()
      const coord = new kakao.maps.LatLng(lat, lng)
      const callback = (result: GeocoderResult[], status: KakaoMapsStatus) => {
        if (status === kakao.maps.services.Status.OK) {
          {
            result[0].road_address !== null
              ? setPosition(result[0].road_address.address_name)
              : setPosition(result[0].address.address_name)
          }
        }
      }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
    }
    getAddress(latitude, longitude)
  }, [])
  return (
    <l.DetailLocationContainer>
      <l.Position>{position}</l.Position>
      <l.MapContainer id="map" />
    </l.DetailLocationContainer>
  )
}

export default Location
