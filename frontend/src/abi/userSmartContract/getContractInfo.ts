import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { contractABI } from '@/constants/abi/contractAbi'

// 계약서 조회하는함수
export const getContractInfo = async contractAddress => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)

    // 주어진 주소와 ABI를 사용하여 스마트 계약 인스턴스 생성
    const contract = new ethers.Contract(contractAddress, contractABI, provider)

    // 'rentalContract' 함수 호출하여 계약 정보 가져오기
    const contractData = await contract.rentalContract()

    // 계약 정보 출력
    console.log('Contract Information:', {
      landlordDID: contractData.contractInfo.landlordDID,
      tenantDID: contractData.contractInfo.tenantDID,
      leasePeriod: contractData.contractInfo.leasePeriod,
      deposit: ethers.utils.formatEther(contractData.contractInfo.deposit),
      propertyDID: contractData.contractInfo.propertyDID,
      contractDate: new Date(
        contractData.contractInfo.contractDate * 1000,
      ).toLocaleDateString(),
      terms: contractData.contractInfo.terms,
    })

    console.log('contractData', contractData)

    // 필요한 경우 외부로 정보 반환
    return contractData
  } catch (error) {
    console.error('Error fetching contract data:', error)
    throw error
  }
}
