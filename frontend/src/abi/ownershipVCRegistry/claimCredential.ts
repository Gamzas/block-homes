import { ethers } from 'ethers'
import { useMutation } from '@tanstack/react-query'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { MOIS_PRIVATE_KEY } from '@constants/abi/MOISPrivateKey'
import { baseOwnershipVCRegistryContract } from '@/abi/ownershipVCRegistry/baseOwnershipVCRegistryContract'

export const useClaimCredential = () => {
  return useMutation({
    mutationFn: async (params: ClaimCredentialInputs) => {
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      const MOISWallet = new ethers.Wallet(MOIS_PRIVATE_KEY, provider)
      const contract = baseOwnershipVCRegistryContract(MOISWallet)

      // 스마트 계약의 함수 인코딩
      const data = contract.interface.encodeFunctionData('claimCredential', [
        params._subject,
        params._issuanceDate,
        params._r,
        params._s,
        params._v,
        params._value,
      ])

      // 트랜잭션 객체 구성
      const tx = {
        from: MOISWallet.address,
        to: contract.address,
        value: ethers.constants.Zero,
        data: data,
      }

      // 트랜잭션 발송 및 수신 확인
      const sentTx = await MOISWallet.sendTransaction(tx)
      const receipt = await sentTx.wait()
      console.log('receipt', receipt)
    },
  })
}
