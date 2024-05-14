import { ethers } from 'ethers'
import { useMutation } from '@tanstack/react-query'
import { baseUserDIDRegistryContract } from '@/abi/userDIDRegistry/baseUserDIDRegistryContract'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { MOIS_PRIVATE_KEY } from '@constants/abi/MOISPrivateKey'

export const useCreateDIDDocument = () => {
  return useMutation({
    mutationFn: async (wallet: ethers.Wallet) => {
      const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
      const MOISWallet = new ethers.Wallet(MOIS_PRIVATE_KEY, provider)
      const contract = baseUserDIDRegistryContract(MOISWallet)

      // 이 부분에서는 스마트 계약의 함수 인코딩 방식을 그대로 유지합니다.
      const data = contract.interface.encodeFunctionData('createDIDDocument', [wallet.address, wallet.publicKey])

      // 트랜잭션 객체 구성
      const tx = {
        from: MOISWallet.address,
        to: contract.address,
        value: ethers.constants.Zero,
        data: data,  // 'input' 대신 'data' 필드 사용
      }

      // 트랜잭션 발송 및 수신 확인
      const sentTx = await MOISWallet.sendTransaction(tx)
      const receipt = await sentTx.wait()
      console.log('receipt', receipt)
    },
  })
}
