import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_ITEM } from '@constants/api'

export const usePostItemRegister = () => {
  return useMutation({
    mutationFn: (formData: FormData) => axios.post(API_ITEM, formData),
  })
}
