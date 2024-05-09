import Web3 from 'web3'
import { ABI_ARRAY, BLOCK_CHAIN_ENDPOINT, CONTRACT_ADDRESS } from '@constants/abi'

export const getContract = () => {
  const web3 = new Web3(BLOCK_CHAIN_ENDPOINT)
  return new web3.eth.Contract(ABI_ARRAY, CONTRACT_ADDRESS).methods
}

// 예시
// const getContractBalance = async () => {
//   try {
//     const result = await getContract().getContractBalance().call()
//     console.log('Contract Balance:', result)
//   } catch (error) {
//     console.error('Failed to get contract balance:', error)
//   }
// }