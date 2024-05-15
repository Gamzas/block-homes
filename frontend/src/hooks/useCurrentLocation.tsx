import {
  currentCoordAtom,
  currentPositonAtom,
  mapCenterCoordAtom,
  matchAtom,
} from '@/stores/atoms/EstateListStore'
import { CoordType } from '@/types/components/estateListType'
import {
  GeocoderResult,
  KakaoMapsStatus,
} from '@/types/components/kakaomapType'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'

const { kakao } = window

const useCurrentLocation = () => {
  // 지도 중심의 위치(상태바 출력)
  const setTown = useSetAtom(currentPositonAtom)
  // 마커 좌표
  const [coord, setCoord] = useAtom(currentCoordAtom)
  // 지도 중심 위치 와 사용자 위치 일지 여부
  const [match, setMatch] = useAtom(matchAtom)
  // 위치 출력을 위한 좌표(지도 이동 시 지도의 센터 좌표값 설정 됨)
  // const [location, setLocation] = useState<CoordType>({
  //   latitude: 37.365264512305174,
  //   longitude: 127.10676860117488,
  // })

  const [location, setLocation] = useAtom(mapCenterCoordAtom)


  // 현재 위치와 지도 중심의 위치를 비교
  const checkCoordinatesMatch = (
    coord: CoordType,
    location: CoordType,
  ): boolean => {
    return (
      coord.latitude === location.latitude &&
      coord.longitude === location.longitude
    )
  }

  // 현재 위치와 지도 중심의 위치가 바뀔때마다 비교
  useEffect(() => {
    const isMatch = checkCoordinatesMatch(coord, location)
    setMatch(isMatch)
  }, [coord, location, setMatch])

  // 현재 좌표 받아오면 location 에 set 하기
  useEffect(() => {
    setLocation(coord)
  }, [coord])

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
          setTown(extractFirstWord(result[0].address.region_3depth_name))
        }
      }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
    }
    getAddress(location.latitude, location.longitude)
  }, [location])

  // 위도 경도 , 현재 위치, 현재위치 재설정
  return { getCurrentLocation, location, setLocation, match }
}

export default useCurrentLocation
