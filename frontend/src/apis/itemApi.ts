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
      userAddress: '0xe0fa92495dfa8e7188e72f593ef2f2988b6b5a87',
      localDateTime: 'string',
    },
  })
  return response.data
}


export const postFavoritItem = async (
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



export const deleteFavoritItem = async (
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


