import { ReqCoordType } from '@/types/components/estateListType'
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

/** 사용 예시
 *   
 * 
 * const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });

  const handleAddressSearch = async (address: string) => {
    try {
      const result = await getCoord(address);
      setCoords(result);
    } catch (error) {
      console.error(error.message);
      alert('좌표를 가져오는데 실패했습니다.');
    }
  };

  useEffect(() => {
    const address = '서울특별시 강남구 역삼동 123-45';
    handleAddressSearch(address);
  }, []);

 */

// 두 좌표간의 거리를 계산하는 함수
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number => {
  const R = 6371 // 지구의 반경 (km)
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return distance
}

export const calculateBoundaries = (
  lat: number,
  lng: number,
  radiusKm: number,
): ReqCoordType => {
  const earthRadiusKm = 6371 // 지구 반지름 (km)

  const deltaLat = (radiusKm / earthRadiusKm) * (180 / Math.PI)
  const deltaLng =
    (radiusKm / (earthRadiusKm * Math.cos((Math.PI * lat) / 180))) *
    (180 / Math.PI)

  const northEastLatitude = lat + deltaLat
  const northEastLongitude = lng + deltaLng
  const southWestLatitude = lat - deltaLat
  const southWestLongitude = lng - deltaLng

  return {
    northEastLatitude,
    northEastLongitude,
    southWestLatitude,
    southWestLongitude,
  }
}
