import { useState } from 'react'
import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { useAtomValue } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'

const useCheckBalance = () => {
  const currentUser = useAtomValue(userAtom)
  const [balance, setBalance] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const getBalance = async (address: string) => {
    try {
      setError(null)
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      const balance = await provider.getBalance(address)
      // 잔액을 Ether 단위로 변환
      const balanceInEther = ethers.utils.formatEther(balance)
      setBalance(balanceInEther)
    } catch (err) {
      setError('Failed to fetch balance. Please check the address.')
      setBalance(null)
    }
  }

  const handleCheckBalance = () => {
    if (ethers.utils.isAddress(currentUser.walletAddress)) {
      getBalance(currentUser.walletAddress)
    } else {
      setError('Invalid address')
      setBalance(null)
    }
  }

  return { handleCheckBalance, balance, getBalance }
}

export default useCheckBalance
