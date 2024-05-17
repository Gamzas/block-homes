import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT, CITIZENSHIP_VC_REGISTRY_CONTRACT_ADDRESS } from '@constants/abi/abi'
import { CITIZENSHIP_VC_REGISTRY_ABI } from '@constants/abi/citizenshipVCRegistryAbi'

export const baseCitizenshipVCRegistryContract = (wallet?: ethers.Wallet) => {
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  const contract = new ethers.Contract(
    CITIZENSHIP_VC_REGISTRY_CONTRACT_ADDRESS,
    CITIZENSHIP_VC_REGISTRY_ABI,
    provider,
  )
  return wallet ? contract.connect(wallet) : contract
}
