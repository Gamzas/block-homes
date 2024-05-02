import { currentPositonAtom } from '@/stores/atoms/estateListStore'
import { GeocoderResult, KakaoMapsStatus } from '@/types/kakaomapType'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const useCurrentLocation = () => {
  // const [location, setLocation] = useState({
  //   latitude: 37.365264512305174,
  //   longitude: 127.10676860117488,
  // })

  const [location, setLocation] = useAtom(currentPositonAtom)
  // console.log(location.location.latitude)
  // 현재 동네
  const [currentPosition, setCurrentPosition] = useState('정자동')

  // 위치 받아오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
  }

  const successHandler = (res: GeolocationPosition) => {
    const { latitude, longitude } = res.coords
    setLocation({ ...location, location: { latitude, longitude } })
  }
  const errorHandler = (err: GeolocationPositionError) => {
    console.log(err)
  }

  useEffect(() => {
    // 좌표 => 주소 변환
    const getAddress = (lat: number, lng: number) => {
      const geocoder = new kakao.maps.services.Geocoder()
      const coord = new kakao.maps.LatLng(lat, lng)
      const callback = (result: GeocoderResult[], status: KakaoMapsStatus) => {
        if (status === kakao.maps.services.Status.OK) {
          // console.log(result[0].address)
          setCurrentPosition(result[0].address.region_3depth_name)
        }
      }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
    }
    getAddress(location.location.latitude, location.location.longitude)
  }, [location])

  // 위도 경도 , 현재 위치, 현재위치 재설정
  return { location, currentPosition, getCurrentLocation }
}

export default useCurrentLocation
