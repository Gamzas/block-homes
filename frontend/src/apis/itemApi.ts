import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
  API_ESTATE_DETAIL,
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

// 등록 된 매물 조회
export const getEstateItems = async () => {
  const res = await publicRequest.get(`${API_ESTATE_ITEM}`, {
    data: {
      northEastLatitude: 35.19611721240724,
      northEastLongitude: 126.81659138779987,
      southWestLatitude: 126.8123206738595,
      southWestLongitude: 35.19102703810346,
      realEstateType: 3,
      reportRank: 0,
      transactionType: 0,
      minPrice: 0,
      maxPrice: 0,
      minPyeong: 0,
      maxPyeong: 0,
    },
  })
  return res.data
}

// 매물 상세 조회
export const useGetDetailItem = (itemNum: number) => {
  return useQuery({
    queryKey: ['detailItem', itemNum],
    queryFn: async () => {
      try {
        const res = await publicRequest.get(`${API_ESTATE_DETAIL}/${itemNum}`)
        return res.data
      } catch (err) {
        console.error(err)
        alert(err.response?.data?.message || '오류가 발생했습니다.')
        window.location.href = '/'
        return null
      }
    },
  })
}

// 찜 목록 조회
export const useGetFavoriteItem = (params: GetFavoritItemParamsType) => {
  return useQuery({
    queryKey: ['favoriteItem'],
    queryFn: () => publicRequest.get(API_FAVORITE_ITEM, { params }),
  })
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

// 매물 찜 등록
export const usePostFavoriteItem = () => {
  return useMutation({
    mutationFn: (data: PostFavoriteDataType) =>
      publicRequest.post(API_FAVORITE_ITEM, data),
    onSuccess: () => {
      alert('찜 등록되었습니다.')
    },
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
      publicRequest.delete(API_FAVORITE_ITEM, { data: data }),
    onSuccess: () => {
      alert('삭제되었습니다.')
    },
  })
}
