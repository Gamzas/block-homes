import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import {
  API_FAVORITE_ITEM,
  API_HEADERS_FORM_DATA,
  API_ITEM,
} from '@constants/api'

export const usePostItemRegister = () => {
  return useMutation({
    mutationFn: (formData: FormData) =>
      axios.post(API_ITEM, formData, API_HEADERS_FORM_DATA),
  })
}

export const getFavoriteItem = async (address: string) => {
  const response = await axios.get(API_FAVORITE_ITEM, {
    params: {
      userAddress: address,
      localDateTime: 'string',
    },
  })
  return response.data
}
