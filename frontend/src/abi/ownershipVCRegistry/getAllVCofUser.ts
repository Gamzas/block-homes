import { useQuery } from '@tanstack/react-query'
import { baseOwnershipVCRegistryContract } from '@/abi/ownershipVCRegistry/baseOwnershipVCRegistryContract'

export const useGetAllVCofUser = (walletAddress: string) => {
  const contract = baseOwnershipVCRegistryContract()
  return useQuery({
    queryKey: ['getDIDDocument', walletAddress],
    queryFn: async () => {
      if (!walletAddress) {
        throw new Error('Missing walletAddress')
      }
      return await contract.getAllVCofUser(walletAddress)
    },
    enabled: !!walletAddress,
  })
}
