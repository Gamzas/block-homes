import axios from 'axios'
import { PrepareRequest, PrepareResponse } from '@/types/components/kaikasType'
import { KAIKAS_API_BASE_HEADERS, KAIKAS_API_BASE_PREPARE_REQUEST_BODY, KAIKAS_API_BASE_URL } from '@constants/kaikas'
import { useMutation, useQuery } from '@tanstack/react-query'


export const usePostPrepare = (
  typeOption: PrepareRequest,
  setRequestKey: (requestKey: string) => void,
) => {
  return useMutation({
    mutationFn: () =>
      axios.post(`${KAIKAS_API_BASE_URL}/prepare`, {
        ...KAIKAS_API_BASE_PREPARE_REQUEST_BODY,
        ...typeOption,
      }, KAIKAS_API_BASE_HEADERS),
    onSuccess: ({ data }: { data: PrepareResponse }) => {
      console.log('Authentication prepared successfully:', data)
      const url = `https://app.kaikas.io/a/${data.request_key}`
      window.open(url, '_blank')
      setRequestKey(data.request_key)
    },
    onError: (error) => {
      console.error('Failed to prepare authentication:', error)
    },
  })
}

export const useGetResult = (requestKey: string) => {
  return useQuery({
    queryKey: ['getResult', requestKey],
    queryFn: async () => {
      const response = await axios.get(`${KAIKAS_API_BASE_URL}/result/${requestKey}`, KAIKAS_API_BASE_HEADERS)
      return response.data
    },
    enabled: !!requestKey,
  })
}