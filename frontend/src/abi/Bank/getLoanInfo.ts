import { ethers } from 'ethers'
import { bankAbi } from '@/constants/abi/bankAbi'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'

// 이더리움 프로바이더와 컨트랙트 설정
const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
const contractAddress = '0x3e015796A4D5f42Ad55C0C800C785dA2b1362757' // 은행주소
const contract = new ethers.Contract(contractAddress, bankAbi, provider)

// 빚 정보 조회 함수
export const getLoanInfo = async mortgage => {
  try {
    const loanInfo = await contract.getLoan(mortgage)
    return {
      target: loanInfo.target,
      pendingLoanAmount: loanInfo.pendingLoanAmount.toString(),
      pendingLoanMortgage: loanInfo.pendingLoanMortgage,
    }
  } catch (error) {
    console.error('대출 정보 조회 중 오류 발생:', error)
    throw error
  }
}
