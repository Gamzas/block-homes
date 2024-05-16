export const itemList = {
  itemList: [
    {
      itemNo: 0,
      realEstateDID: 'string',
      roadNameAddress: '광주 광산구 장신로 20번길 13-12',
      transactionType: 1, // 월세
      realEstateType: 3,
      reportRank: 2,
      transactionStatus: 2,
      area: 37,
      pyeong: 8,
      price: 30000000,
      monthlyPrice: 100000, // 전세라 월세 0
      administrationCost: 100000,
      contractMonths: 12,
      latitude: 35.1900186143141,
      longitude: 126.813377377676,
    },
    {
      itemNo: 1,
      realEstateDID: 'string',
      roadNameAddress: '광주 광산구 풍영로229번안길 2-14',
      transactionType: 1, //월세
      realEstateType: 3,
      reportRank: 1,
      transactionStatus: 3,
      area: 37,
      pyeong: 8,
      price: 30000000,
      monthlyPrice: 200000, // 매매라 월세 0
      administrationCost: 100000,
      contractMonths: 0, // 매매라 계약기간 0
      latitude: 35.1932646047073,
      longitude: 126.81381124846,
    },
    {
      itemNo: 2,
      realEstateDID: 'string',
      roadNameAddress: '광주 광산구 장덕로50번길 8',
      transactionType: 2, // 전세
      realEstateType: 3,
      reportRank: 3,
      transactionStatus: 1,
      area: 37,
      pyeong: 8,
      price: 200000000, // 전세가
      monthlyPrice: 0, // 월세
      administrationCost: 100000,
      contractMonths: 12,
      latitude: 35.194070996462,
      longitude: 126.814484257286,
    },
    {
      itemNo: 3,
      realEstateDID: 'string',
      roadNameAddress: '광주 광산구 풍영로229번안길 2-16',
      transactionType: 1,
      realEstateType: 3,
      reportRank: 2,
      transactionStatus: 1,
      area: 37,
      pyeong: 8,
      price: 2000000, // 보증금
      monthlyPrice: 300000, // 월세
      administrationCost: 50000,
      contractMonths: 24,
      latitude: 35.194070996462,
      longitude: 126.814484257286,
    },
    {
      itemNo: 4,
      realEstateDID: 'string',
      roadNameAddress: '광주 광산구 장덕로50번길 12-3',
      transactionType: 2, // 전세
      realEstateType: 3,
      reportRank: 1,
      transactionStatus: 1,
      area: 37,
      pyeong: 8,
      price: 30000000,
      monthlyPrice: 0, // 전세라 월세
      administrationCost: 100000,
      contractMonths: 12,
      latitude: 35.1937234411548,
      longitude: 126.814311998746,
    },
  ],
  count: 5,
}

export const DetailItem = {
  itemNo: 0,
  ownerDID: 'string',
  realEstateDID: 'string',
  roadNameAddress: '광주 광산구 장신로 20번길 13-12',
  realEstateType: 3,
  reportRank: 1,
  transactionStatus: 2,
  area: 33,
  pyeong: 10,
  price: 2000000,
  monthlyPrice: 300000,
  administrationCost: 50000,
  contractMonths: 12,
  latitude: 35.1937234411548,
  longitude: 126.814311998746,
  roomNumber: 1,
  toiletNumber: 1,
  description: `⭐ 특징 ⭐ 
  - 1룸 오픈형 구조입니다- 화이트톤 깨끗함의 정석~! 올리모델링 
  ⭐ 위치 ⭐
  - 신사동 가로수길 블럭입니다- 신사/압구정 도보거리 이용가능
  `,
  buildingFloor: 7,
  itemFloor: 3,
  moveInDate: '2024-05-16T10:36:41.088Z',
  parkingRate: 0,
  haveElevator: true,
  createdAt: '2024-05-16T10:36:41.088Z',
  itemImageList: [
    {
      imageUrl: 'string',
      itemImageCategory: 0,
    },
  ],
  itemAdministrationFeeList: [1, 2, 3, 4, 5],
  itemAdditionalOptionList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
}
