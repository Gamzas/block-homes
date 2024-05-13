import {
  currentCoordAtom,
  currentPositonAtom,
} from '@/stores/atoms/EstateListStore'
import { CoordType } from '@/types/estateListType'
import { GeocoderResult, KakaoMapsStatus } from '@/types/kakaomapType'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'

const { kakao } = window

const useCurrentLocation = () => {
  const setTown = useSetAtom(currentPositonAtom)
  const [coord, setCoord] = useAtom(currentCoordAtom)

  // 위치 출력을 위한 좌표(지도 이동 시 지도의 센터 좌표값 설정 됨)
  const [location, setLocation] = useState<CoordType>({
    latitude: 37.365264512305174,
    longitude: 127.10676860117488,
  })

  // 현재 좌표 받아오면 location 에 set 하기
  useEffect(() => {
    setLocation(coord)
  }, [coord])
  // 현재 동네

  // 위치 받아오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
  }

  const successHandler = (res: GeolocationPosition) => {
    const { latitude, longitude } = res.coords
    setCoord({ latitude, longitude })
  }
  const errorHandler = (err: GeolocationPositionError) => {
    console.log(err)
  }

  useEffect(() => {
    // 앞 지역만 추출
    const extractFirstWord = (text: string) => {
      return text.split(' ')[0]
    }

    // 좌표 => 주소 변환
    const getAddress = (lat: number, lng: number) => {
      const geocoder = new kakao.maps.services.Geocoder()
      const coord = new kakao.maps.LatLng(lat, lng)
      const callback = (result: GeocoderResult[], status: KakaoMapsStatus) => {
        if (status === kakao.maps.services.Status.OK) {
          // DELETE 주석 삭제하기
          // console.log(result[0].address)
          // console.log(result[0].road_address)
          // setCurrentPosition(result[0].address.region_3depth_name)
          setTown(extractFirstWord(result[0].address.region_3depth_name))
        }
      }
      // const callback = (result: GeocoderResult[], status: KakaoMapsStatus) => {
      //   if (status === kakao.maps.services.Status.OK) {
      //     if (result.length > 0) {
      //       console.log(result[0].address)
      //       setTown(result[0].address.region_3depth_name)
      //     } else {
      //       console.error('No results found')
      //     }
      //   } else {
      //     console.error('Geocoding failed:', status)
      //   }
      // }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
    }
    getAddress(location.latitude, location.longitude)
  }, [location])

  // 위도 경도 , 현재 위치, 현재위치 재설정
  return { getCurrentLocation, setLocation }
}

export default useCurrentLocation
