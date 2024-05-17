import { useQuery } from '@tanstack/react-query'
import { baseRealEstateInfoContract } from '@/abi/realEstateInfo/baseRealEstateInfoContract'

export const useGetRealEstateInfo = (realEstateDID: string) => {
  return useQuery({
    queryKey: ['getRealEstateInfo', realEstateDID],
    queryFn: async () => {
      const contract = baseRealEstateInfoContract(realEstateDID)
      return await contract.getRealEstateInfo()
    },
    enabled: !!realEstateDID,
  })
}
