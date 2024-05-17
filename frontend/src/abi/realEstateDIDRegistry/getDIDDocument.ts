import { useQuery } from '@tanstack/react-query'
import { baseRealEstateDIDRegistryContract } from '@/abi/realEstateDIDRegistry/baseRealEstateDIDRegistryContract'

export const useGetDIDDocument = (realEstateDID: string) => {
  const contract = baseRealEstateDIDRegistryContract()
  return useQuery({
    queryKey: ['getDIDDocument', realEstateDID],
    queryFn: async () => {
      if (!realEstateDID) {
        throw new Error('Missing userWallet or realEstateDID')
      }
      return await contract.getDIDDocument(realEstateDID)
    },
    enabled: !!realEstateDID,
  })
}
