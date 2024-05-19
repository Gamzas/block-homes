// utils/convertBigNumber.ts
import BigNumber from 'bignumber.js'

export const convertBigNumber = (value: string): number => {
  const bigNumberValue = new BigNumber(value)
  return bigNumberValue.toNumber()
}
