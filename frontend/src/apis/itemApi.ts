import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
  API_ESTATE_ITEM,
  API_FAVORITE_ITEM,
  API_HEADERS_FORM_DATA,
  API_ITEM,
} from '@constants/api'
import { publicRequest } from '@/hooks/requestMethods'
import {
  EstateItemReqType,
  GetFavoritItemParamsType,
  PostFavoriteDataType,
} from '@/types/api/itemType'

export const usePostItemRegister = () => {
  return useMutation({
    mutationFn: (formData: FormData) =>
      axios.post(API_ITEM, formData, API_HEADERS_FORM_DATA),
  })
}

// 등록 된 매물 조회,상세 조회
export const getEstateItems = async (data: EstateItemReqType) => {
  const res = await publicRequest.get(`${API_ESTATE_ITEM}`, { data })
  return res.data
}



// 찜 목록 조회
export const getFavoriteItem = async (address: string) => {
  const response = await publicRequest.get(API_FAVORITE_ITEM, {
    params: {
      userAddress: address,
      localDateTime: 'string',
    },
  })
  return response.data
}

// 매물 찜 등록
// export const postFavoriteItem = async (
//   itemNo: number,
//   walletAddress: string,
// ) => {
//   await publicRequest.post(API_FAVORITE_ITEM, {
//     data: {
//       itemNo,
//       walletAddress,
//     },
//   })
// }

export const usePostFavoriteItem = () => {
  return useMutation({
    mutationFn: (data: PostFavoriteDataType) =>
      publicRequest.post(API_FAVORITE_ITEM, data),
  })
}

// 찜 삭제
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

export const useDeleteFavoriteItem = () => {
  return useMutation({
    mutationFn: (data: PostFavoriteDataType) =>
      publicRequest.delete(API_FAVORITE_ITEM, { data }),
  })
}
