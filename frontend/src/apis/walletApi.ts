import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { API_WALLET, API_WALLET_CHECK } from '@constants/api'
import { GetWalletCheckParams, PostWalletParams } from '@/types/api/walletType'

export const useGetWalletCheck = () => {
  return useMutation({
    mutationFn: (params: GetWalletCheckParams) => axios.get(API_WALLET_CHECK, { params }),
  })
}

export const usePostWallet = () => {
  return useMutation({
    mutationFn: (params: PostWalletParams) => axios.post(API_WALLET, params),
  })
}
