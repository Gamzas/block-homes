import {
  currentCoordAtom,
  currentPositonAtom,
  mapCenterCoordAtom,
  matchAtom,
  userCoordAtom,
} from '@/stores/atoms/EstateListStore'
import { CoordType } from '@/types/components/estateListType'
import {
  GeocoderResult,
  KakaoMapsStatus,
} from '@/types/components/kakaomapType'
import { useAtom, useSetAtom } from 'jotai'
import { useCallback, useEffect, useRef } from 'react'

const { kakao } = window

const useCurrentLocation = () => {
  const setTown = useSetAtom(currentPositonAtom)
  const [coord, setCoord] = useAtom(currentCoordAtom)
  const [match, setMatch] = useAtom(matchAtom)
  const [location, setLocation] = useAtom(mapCenterCoordAtom)
  const [userCoord, setUserCoord] = useAtom(userCoordAtom)
  const lastLocationRef = useRef<CoordType>({ latitude: 0, longitude: 0 })

  const checkCoordinatesMatch = (
    coord: CoordType,
    location: CoordType,
  ): boolean => {
    return (
      coord.latitude === location.latitude &&
      coord.longitude === location.longitude
    )
  }

  useEffect(() => {
    const isMatch = checkCoordinatesMatch(location, userCoord)
    setMatch(isMatch)
  }, [coord, location, setMatch])

  useEffect(() => {
    setLocation(coord)
  }, [coord, setLocation])

  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
  }, [])

  const successHandler = (res: GeolocationPosition) => {
    const { latitude, longitude } = res.coords
    setUserCoord({ latitude, longitude }) // 사용자 위치
    setCoord({ latitude, longitude }) // 마커 위치
    // setLocation({ latitude, longitude }) // 지도 중심을 사용자의 위치로 설정
  }

  const errorHandler = (err: GeolocationPositionError) => {
    console.log(err)
  }

  useEffect(() => {
    const extractFirstWord = (text: string) => {
      return text.split(' ')[0]
    }

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

    // Update the address only if the location has changed significantly
    const distanceChanged = (
      loc1: CoordType,
      loc2: CoordType,
      threshold = 0.001,
    ) => {
      const latDiff = Math.abs(loc1.latitude - loc2.latitude)
      const lngDiff = Math.abs(loc1.longitude - loc2.longitude)
      return latDiff > threshold || lngDiff > threshold
    }

    if (distanceChanged(location, lastLocationRef.current)) {
      getAddress(location.latitude, location.longitude)
      lastLocationRef.current = location
    }
  }, [location])

  return { getCurrentLocation, location, setLocation, match }
}

export default useCurrentLocation
