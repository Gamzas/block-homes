// utils/convertBigNumber.ts
import BigNumber from 'bignumber.js'

export const convertBigNumber = (value: string): number => {
  const bigNumberValue = new BigNumber(value)
  return bigNumberValue.toNumber()
}

export const transformData = (input: string): string[] => {
  // Split the input string by '/'
  const items = input.split('/')

  // Trim each item and add a numbered list
  // const numberedList = items
  //   .map((item, index) => `${index + 1}. ${item.trim()}`)
  //   .join('\n')

  // return numberedList
  const numberedList = items.map(
    (item, index) => `${index + 1}. ${item.trim()}`,
  )

  return numberedList
}

// Example usage
const data =
  '잔금일까지 해당 주택에 근저당 추가 설정하지 않는다/ 계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다/ 만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다/ 만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.'
const result = transformData(data)

console.log(result)
