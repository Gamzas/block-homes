import { getContractInfo } from '@/abi/userSmartContract/getContractInfo'
import { API_MY_CONTRACT } from '@/constants/api'
import { publicRequest } from '@/hooks/requestMethods'
import { useQuery } from '@tanstack/react-query'

export const useGetMyContract = (mode: number, walletAddress: string) => {
  return useQuery({
    queryKey: ['mycontractList', mode, walletAddress],
    queryFn: async () => {
      try {
        const res = await publicRequest.get(API_MY_CONTRACT, {
          params: {
            mode,
            walletAddress,
          },
        })
        console.log(res)
        return res.data
      } catch (err) {
        console.log(err)
      }
    },
  })
}

export const useGetContractInfo = (contractAddress: string) => {
  return useQuery({
    queryKey: ['contractInfo', contractAddress],
    queryFn: async () => {
      try {
        const res = await getContractInfo(contractAddress)
        return res
      } catch (err) {
        console.log(err)
      }
    },
  })
}
