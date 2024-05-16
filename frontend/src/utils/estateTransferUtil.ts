export const getTransactionStatus = (type: number): string => {
  switch (type) {
    case 1:
      return '거래전'
    case 2:
      return '거래중'
    case 3:
      return '거래 완료'
  }
}

export const getTransactionType = (type: number): string => {
  switch (type) {
    case 1:
      return '월세'
    case 2:
      return '전세'
    case 3:
      return '매매'
  }
}

export const getReportRank = (type: number): string => {
  switch (type) {
    case 1:
      return '안전'
    case 2:
      return '보통'
    case 3:
      return '위험'
  }
}

export const getRealEstateType = (type: number): string => {
  switch (type) {
    case 1:
      return '아파트'
    case 2:
      return '빌라'
    case 3:
      return '원룸'
    case 4:
      return '오피스텔'
  }
}

export const getItemImageCategory = (type: number): string => {
  switch (type) {
    case 1:
      return '메인사진'
    case 2:
      return '방'
    case 3:
      return '주방 및 화장실'
  }
}

// 관리비
export const getAdministrationFeeCategory = (type: number): string => {
  switch (type) {
    case 1:
      return '전기'
    case 2:
      return '가스'
    case 3:
      return '수도'
    case 4:
      return '인터넷'
    case 5:
      return 'TV'
  }
}

// 추가옵션
export const getAdditionalOptionCategory = (type: number): string => {
  switch (type) {
    case 1:
      return '에어컨'
    case 2:
      return '냉장고'
    case 3:
      return '세탁기'
    case 4:
      return '가스레인지'
    case 5:
      return '인덕션'
    case 6:
      return '전자레인지'
    case 7:
      return '책상'
    case 8:
      return '책장'
    case 9:
      return '옷장'
    case 10:
      return '침대'
    case 11:
      return '신발장'
    case 12:
      return '싱크대'
  }
}