export interface GeocoderResult {
  address: {
    address_name: string // 전체 주소 명
    region_1depth_name: string // 대분류 지역명 (예: 서울특별시)
    region_2depth_name: string // 중분류 지역명 (예: 강남구)
    region_3depth_name: string // 소분류 지역명 (예: 삼성동)
    mountain_yn: string // 산 여부 (Y 또는 N)
    main_address_no: string // 주 주소 번호
    sub_address_no: string // 부 주소 번호
    zip_code: string // 우편 번호
  }
  road_address: null | {
    address_name: string // 도로명 주소 전체 명
    region_1depth_name: string
    region_2depth_name: string
    region_3depth_name: string
    road_name: string // 도로명
    underground_yn: string // 지하 여부 (Y 또는 N)
    main_building_no: string // 주 건물 번호
    sub_building_no: string // 부 건물 번호
    building_name: string // 건물명
    zone_no: string // 우편번호
  }
}

export enum KakaoMapsStatus {
  OK = 'OK',             // 성공
  ERROR = 'ERROR',       // 오류
  ZERO_RESULT = 'ZERO_RESULT' // 결과 없음
}
