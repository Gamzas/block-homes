import {
  GeocoderResult,
  KakaoMapsStatus,
} from '@/types/components/kakaomapType'

const { kakao } = window

// 주소 앞 3자리 추출
export const extractFirstWord = (text: string) => {
  return text.split(' ')[0]
}

// 좌표 => 주소 변환
export const getAddress = (lat: number, lng: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const geocoder = new kakao.maps.services.Geocoder()
    const coord = new kakao.maps.LatLng(lat, lng)
    const callback = (result: GeocoderResult[], status: KakaoMapsStatus) => {
      if (status === kakao.maps.services.Status.OK) {
        const address = extractFirstWord(result[0].address.region_3depth_name)
        resolve(address)
      } else {
        reject(new Error('주소를 찾을 수 없습니다.'))
      }
    }
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
  })
}

// 좌표 => 주소 변환 함수
export const getCoord = (
  address: string,
): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    const geocoder = new kakao.maps.services.Geocoder()
    geocoder.addressSearch(
      address,
      (result: GeocoderResult[], status: KakaoMapsStatus) => {
        if (status === kakao.maps.services.Status.OK) {
          if (result.length > 0) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            resolve({
              latitude: coords.getLat(),
              longitude: coords.getLng(),
            })
          } else {
            reject(new Error('검색된 결과가 없습니다.'))
          }
        } else {
          console.error('주소 검색 실패:', status)
          reject(new Error('주소 검색에 실패하였습니다.'))
        }
      },
    )
  })
}
