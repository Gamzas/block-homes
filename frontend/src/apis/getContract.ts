import { ethers } from 'ethers'
import { ABI_ARRAY, BLOCK_CHAIN_ENDPOINT, CONTRACT_ADDRESS } from '@constants/abi'

export const getContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  return new ethers.Contract(CONTRACT_ADDRESS, ABI_ARRAY, provider)
}

// 예시
// const getContractBalance = async () => {
//   try {
//     const contract = getContract();
//     const result = await contract.getContractBalance();
//     console.log('계약 잔액:', result.toString());
//   } catch (error) {
//     console.error('계약 잔액 가져오기 실패:', error);
//   }
// };
