import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_BASE_HEADERS, API_ITEM_REGISTER } from '@constants/api'
import { PostItemRegisterParams } from '@/types/api/itemType'

export const usePostWallet = () => {
  return useMutation({
    mutationFn: (params: PostItemRegisterParams) =>
      axios.post(API_ITEM_REGISTER, params, API_BASE_HEADERS),
  })
}
