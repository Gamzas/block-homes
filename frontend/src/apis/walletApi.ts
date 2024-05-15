import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  API_HEADERS_FORM_DATA,
  API_HEADERS_JSON,
  API_WALLET,
  API_WALLET_CHECK,
} from '@constants/api'
import {
  GetWalletCheckParams,
  GetWalletCheckResponse,
  GetWalletParams,
  PostWalletParams,
} from '@/types/api/walletType'
import { UserType } from '@/types/userType'

export const useGetWalletCheck = ({
  name,
  setUserAtom,
  setIsSignIn,
  navigate,
}: {
  name: string
  setUserAtom: (currentUser: UserType) => void
  setIsSignIn: (isSignIn: boolean) => void
  navigate: (path: string) => void
}) => {
  return useMutation({
    mutationFn: (params: GetWalletCheckParams) =>
      axios.get(API_WALLET_CHECK, { params }),
    onSuccess: ({ data }: { data: GetWalletCheckResponse }) => {
      setUserAtom({
        walletAddress: data.walletAddress,
        name: name,
      })
      navigate('/')
    },
    onError: () => {
      setIsSignIn(false)
    },
  })
}

export const usePostWallet = () => {
  return useMutation({
    mutationFn: (params: PostWalletParams) =>
      axios.post(API_WALLET, params, API_HEADERS_JSON),
  })
}

export const useGetWallet = (params: GetWalletParams) => {
  return useQuery({
    queryKey: ['getWallet', params],
    queryFn: () => axios.get(API_WALLET, { params }),
    enabled: !!params.walletAddress,
  })
}
