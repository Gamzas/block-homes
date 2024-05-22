import { useQuery } from '@tanstack/react-query'
import { baseCitizenshipVCRegistryContract } from '@/abi/citizenshipVCRegistry/baseCitizenshipVCRegistryContract'

export const useGetVC = (walletAddress) => {
  const contract = baseCitizenshipVCRegistryContract()
  return useQuery({
    queryKey: ['getVC', walletAddress],
    queryFn: async () => {
      if (!walletAddress) {
        throw new Error('Missing walletAddress')
      }
      return await contract.getVC(walletAddress)
    },
    enabled: !!walletAddress,
  })
}