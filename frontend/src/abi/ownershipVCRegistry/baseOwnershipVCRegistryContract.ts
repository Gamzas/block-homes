import { ethers } from 'ethers'
import {
  BLOCK_CHAIN_ENDPOINT,
  OWNERSHIP_VC_REGISTRY_CONTRACT_ADDRESS,
} from '@constants/abi/abi'
import { OWNERSHIP_VC_REGISTRY_ABI } from '@constants/abi/ownershipVCRegistryAbi'

export const baseOwnershipVCRegistryContract = (wallet?: ethers.Wallet) => {
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  const contract = new ethers.Contract(
    OWNERSHIP_VC_REGISTRY_CONTRACT_ADDRESS,
    OWNERSHIP_VC_REGISTRY_ABI,
    provider,
  )
  return wallet ? contract.connect(wallet) : contract
}
