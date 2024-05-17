import { useQuery } from '@tanstack/react-query'
import { GetDIDDocumentInputs } from '@/types/abi/realEstateDIDRegistryContractType'
import { baseRealEstateDIDRegistryContract } from '@/abi/realEstateDIDRegistry/baseRealEstateDIDRegistryContract'

export const useGetDIDDocument = (params: GetDIDDocumentInputs) => {
  const { userWallet, realEstateDID } = params
  const contract = baseRealEstateDIDRegistryContract(userWallet)
  return useQuery({
    queryKey: ['getDIDDocument', realEstateDID],
    queryFn: async () => {
      if (!userWallet || !realEstateDID) {
        throw new Error('Missing userWallet or realEstateDID')
      }
      return await contract.getDIDDocument(realEstateDID)
    },
    enabled: !!userWallet && !!realEstateDID,
  })
}
