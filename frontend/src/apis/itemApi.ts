import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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
  EstateItemResType,
  GetFavoritItemParamsType,
  PostFavoriteDataType,
} from '@/types/api/itemType'
import { FilterType, ReqCoordType } from '@/types/components/estateListType'
import { useSetAtom } from 'jotai'
import { estateItemListAtom } from '@/stores/atoms/EstateListStore'

export const usePostItemRegister = () => {
  return useMutation({
    mutationFn: (formData: FormData) =>
      axios.post(API_ITEM, formData, API_HEADERS_FORM_DATA),
  })
}

// const setItemList = useSetAtom(estateItemListAtom)

// 등록 된 매물 조회(필터링 가능)
export const useGetEstateItems = (
  category: number,
  report: number,
  filter: FilterType,
  coord: ReqCoordType,
  setItem: (itemList: EstateItemResType) => void,
) => {
  return useQuery({
    queryKey: ['estateItems', category, report, filter, coord, setItem],
    queryFn: async () => {
      try {
        const res = await publicRequest.get(`${API_ESTATE_ITEM}`, {
          params: {
            ...coord,
            reportRank: report,
            realEstateType: category,
            ...filter,
          },
        })
        setItem(res.data)
        return res.data
      } catch (err) {
        console.error(err)
        // alert(err.response?.data?.message || '오류가 발생했습니다.')
        return null
      }
    },
  })
}

// 매물 상세 조회
export const useGetDetailItem = (itemNum: number, walletAddress: string) => {
  return useQuery({
    queryKey: ['detailItem', itemNum, walletAddress],
    queryFn: async () => {
      try {
        const res = await publicRequest.get(`${API_ESTATE_DETAIL}/${itemNum}`, {
          params: { walletAddress },
        })
        return res.data
      } catch (err) {
        console.log(err)
        // alert(err.response?.data?.message || '오류가 발생했습니다.')
        // window.location.href = '/'
        return null
      }
    },
  })
}

// 부동산 매물 삭제
export const useDeleteEstateItem = (number: number, walletAddress: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () =>
      publicRequest
        .delete(API_ITEM, {
          params: {
            itemNo: number,
            walletAddress: walletAddress,
          },
        })
        .then(res => console.log(res))
        .catch(err => console.log(err)),
    onSuccess: () => {
      alert('삭제되었습니다.')
      // window.location.href = `-1`
      // 매물 리스트 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['estateItems'] })
    },
    onError: err => {
      console.log(err)
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
    params: {
      itemNo,
      walletAddress,
    },
  })
}

export const useDeleteFavoriteItem = () => {
  return useMutation({
    mutationFn: (data: PostFavoriteDataType) =>
      publicRequest.delete(API_FAVORITE_ITEM, { params: data }),
    onSuccess: () => {
      alert('삭제되었습니다.')
    },
  })
}
