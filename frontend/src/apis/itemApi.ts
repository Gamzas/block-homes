import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import {
  API_ESTATE_ITEM,
  API_FAVORITE_ITEM,
  API_HEADERS_FORM_DATA,
  API_ITEM,
} from '@constants/api'
import { publicRequest } from '@/hooks/requestMethods'
import { EstateItemReqType } from '@/types/api/itemType'

export const usePostItemRegister = () => {
  return useMutation({
    mutationFn: (formData: FormData) =>
      axios.post(API_ITEM, formData, API_HEADERS_FORM_DATA),
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

// 등록 된 매물 조회,상세 조회

export const getEstateItems = async (data: EstateItemReqType) => {
  const res = await publicRequest.get(`${API_ESTATE_ITEM}`, { data })
  return res.data
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
