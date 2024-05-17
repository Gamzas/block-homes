import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { REAL_ESTATE_INFO_ABI } from '@constants/abi/RealEstateInfo'

export const baseRealEstateInfoContract = (realEstateDID: string) => {
  const realEstateAddress = realEstateDID.replace('did:klay:', '')
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  return new ethers.Contract(
    realEstateAddress,
    REAL_ESTATE_INFO_ABI,
    provider,
  )
}
