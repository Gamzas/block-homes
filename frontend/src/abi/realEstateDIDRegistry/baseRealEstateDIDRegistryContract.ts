import { ethers } from 'ethers'
import {
  BLOCK_CHAIN_ENDPOINT,
  REAL_ESTATE_DID_REGISTRY_CONTRACT_ADDRESS,
} from '@constants/abi/abi'
import { REAL_ESTATE_DID_REGISTRY_ABI } from '@constants/abi/realEstateDIDRegistryAbi'

export const baseRealEstateDIDRegistryContract = (wallet?: ethers.Wallet) => {
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  const contract = new ethers.Contract(
    REAL_ESTATE_DID_REGISTRY_CONTRACT_ADDRESS,
    REAL_ESTATE_DID_REGISTRY_ABI,
    provider,
  )
  return wallet ? contract.connect(wallet) : contract
}
