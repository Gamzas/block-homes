import { GeocoderResult, KakaoMapsStatus } from '@/types/kakaomapType'
import { useState } from 'react'

const { kakao } = window

const useSearchLocation = () => {
  const geocoder = new kakao.maps.services.Geocoder()
  const [locationList, setLocationList] = useState<GeocoderResult[]>()
  // const keyword = word

  // 주소로 좌표를 검색합니다.
  const searchLocation = (address: string) => {
    geocoder.addressSearch(
      address,
      (result: GeocoderResult[], status: KakaoMapsStatus) => {
        console.log('상태 코드:', status)
        if (status === kakao.maps.services.Status.OK) {
          // 동명의 동네가 없을 때
          if (result.length === 1) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            console.log(coords)
            // 동명의 동네가 있을 때
          } else {
            console.log(result)
            setLocationList(result)
          }
          // 결과가 여러 개인 경우 모두 저장
        } else {
          console.error('주소 검색 실패:', status)
          alert('검색 결과가 없습니다. 더 정확한 주소를 입력해주세요.')
        }
      },
    )
  }

  // 키워드로 동네 검색
  return { searchLocation }
}

export default useSearchLocation
