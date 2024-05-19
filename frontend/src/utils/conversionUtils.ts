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
