import { useQuery } from '@tanstack/react-query'
import { baseOwnershipVCRegistryContract } from '@/abi/ownershipVCRegistry/baseOwnershipVCRegistryContract'

export const useGetAllVCofUser = (walletAddress: string) => {
  const contract = baseOwnershipVCRegistryContract()
  const userDID = `did:klay:${walletAddress}`
  return useQuery({
    queryKey: ['getAllVCofUser', userDID],
    queryFn: async () => {
      if (!walletAddress) {
        throw new Error('Missing walletAddress')
      }
      return await contract.getAllVCofUser(userDID)
    },
    enabled: !!walletAddress,
  })
}
