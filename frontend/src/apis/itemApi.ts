import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_FAVORITE_ITEM, API_ITEM } from '@constants/api'
import { publicRequest } from '@/hooks/requestMethods'

export const usePostItemRegister = () => {
  return useMutation({
    mutationFn: (formData: FormData) => axios.post(API_ITEM, formData),
  })
}

export const getFavoriteItem = async (address: string) => {
  const response = await publicRequest.get(API_FAVORITE_ITEM, {
    params: {
      userAddress: address,
      localDateTime: 'string',
    },
  })
  return response.data
}

export const postFavoriteItem = async (
  itemNo: number,
  walletAddress: string,
) => {
  await publicRequest.post(API_FAVORITE_ITEM, {
    data: {
      itemNo,
      walletAddress,
    },
  })
}

export const deleteFavoriteItem = async (
  itemNo: number,
  walletAddress: string,
) => {
  await publicRequest.delete(API_FAVORITE_ITEM, {
    data: {
      itemNo,
      walletAddress,
    },
  })
}
