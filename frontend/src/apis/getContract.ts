import Web3 from 'web3'
import {
  blockChainEndpoint,
  contractABI,
  contractAddress,
} from '@constants/contract'

export const getContract = () => {
  const web3 = new Web3(blockChainEndpoint)
  return new web3.eth.Contract(contractABI, contractAddress).methods
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