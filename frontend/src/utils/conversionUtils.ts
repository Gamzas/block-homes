// utils/convertBigNumber.ts
import BigNumber from 'bignumber.js'

export const convertBigNumber = (value: string): number => {
  const bigNumberValue = new BigNumber(value)
  return bigNumberValue.toNumber() / 1000000000000000000
}

export const transformData = (input: string): string[] => {
  if (input.trim() === '') {
    return []
  }

  // Split the input string by '/'
  const items = input.split('/')

  // Trim each item and add a numbered list
  const numberedList = items.map(
    (item, index) => `${index + 1}. ${item.trim()}`,
  )

  return numberedList
}

// 전세계약 klay 단위 변환

export const convertKlayToKRW = (klayAmount: number) => {
  const KLAY_TO_KRW = 10000000 // 1 KLAY = 10,000,000 원
  const krwAmount = klayAmount * KLAY_TO_KRW

  if (krwAmount >= 100000000) {
    // 1억 원 이상일 경우
    const hundredMillions = Math.floor(krwAmount / 100000000)
    const remainder = krwAmount % 100000000
    const remainderMillions = Math.floor(remainder / 10000000)

    return `${hundredMillions}억${remainderMillions ? ' ' + remainderMillions + '천만' : ''}원`
  }

  return krwAmount.toLocaleString('ko-KR') + ' 원' // 천 단위 구분자 추가
}
