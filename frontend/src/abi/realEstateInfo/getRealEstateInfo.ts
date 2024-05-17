import { useQuery } from '@tanstack/react-query'
import { baseRealEstateInfoContract } from '@/abi/realEstateInfo/baseRealEstateInfoContract'

export const useGetRealEstateInfo = (realEstateDID: string) => {
  const contract = baseRealEstateInfoContract(realEstateDID)
  return useQuery({
    queryKey: ['getRealEstateInfo'],
    queryFn: async () => {
      return await contract.getRealEstateInfo()
    },
    enabled: !!realEstateDID,
  })
}
