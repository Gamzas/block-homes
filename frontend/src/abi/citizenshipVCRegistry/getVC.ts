import { ethers } from 'ethers'
import { useQuery } from '@tanstack/react-query'
import { baseCitizenshipVCRegistryContract } from '@/abi/citizenshipVCRegistry/baseCitizenshipVCRegistryContract'

export const useGetVC = (wallet: ethers.Wallet) => {
  const contract = baseCitizenshipVCRegistryContract(wallet)
  return useQuery({
    queryKey: ['getVC', wallet.address],
    queryFn: async () => {
      if (!wallet.address) {
        throw new Error('Missing userWallet or realEstateDID')
      }
      return await contract.getVC(wallet.address)
    },
    enabled: !!wallet.address,
  })
}