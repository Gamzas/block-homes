import { GeocoderResult, KakaoMapsStatus } from '@/types/kakaomapType'
import { useState } from 'react'

const { kakao } = window

const useSearchLocation = () => {
  const geocoder = new kakao.maps.services.Geocoder()
  const [locationList, setLocationList] = useState<GeocoderResult[]>([])
  // locationlist 존재 시 모달 오픈!
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 선택한 아이템
  const handleSelectLocation = (location: GeocoderResult) => {
    console.log(location.address_name)
    const coords = new kakao.maps.LatLng(location.y, location.x)
    console.log('선택된 좌표:', coords)
    setIsModalOpen(false) // 모달 닫기
  }
  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // 주소로 좌표를 검색합니다.
  const searchLocation = (address: string) => {
    geocoder.addressSearch(
      address,
      (result: GeocoderResult[], status: KakaoMapsStatus) => {
        console.log('상태 코드:', status)
        if (status === kakao.maps.services.Status.OK) {
          // 동명의 동네가 없을 때
          if (result.length === 1) {
            console.log(result[0].address_name)
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            console.log(coords)
            // 동명의 동네가 있을 때
          } else {
            setIsModalOpen(true)
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
  return {
    searchLocation,
    locationList,
    isModalOpen,
    handleSelectLocation,
    handleCloseModal,
  }
}

export default useSearchLocation
