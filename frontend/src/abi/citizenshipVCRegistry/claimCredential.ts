import { ethers } from 'ethers'
import { useMutation } from '@tanstack/react-query'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { MOIS_PRIVATE_KEY } from '@constants/abi/MOISPrivateKey'
import { baseCitizenshipVCRegistryContract } from '@/abi/citizenshipVCRegistry/baseCitizenshipVCRegistryContract'
import { ClaimCredentialInputs } from '@/types/abi/citizenshipVCRegistryType'

export const useClaimCredential = () => {
  return useMutation({
    mutationFn: async (params: ClaimCredentialInputs) => {
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      const MOISWallet = new ethers.Wallet(MOIS_PRIVATE_KEY, provider)
      const contract = baseCitizenshipVCRegistryContract(MOISWallet)

      const subject = `did:klay:${params.walletAddress}`.toLowerCase()
      const value = 'Republic of Korea'
      const message = ethers.utils.solidityKeccak256(
        ['string', 'uint256', 'string'],
        [subject, Math.floor(Date.now() / 1000), value],
      )
      const messageBytes = ethers.utils.arrayify(message)
      const flatSig = await MOISWallet.signMessage(messageBytes)
      const sig = ethers.utils.splitSignature(flatSig)

      // 스마트 계약의 함수 인코딩
      const data = contract.interface.encodeFunctionData('claimCredential', [
        subject,
        Math.floor(Date.now() / 1000),
        sig.r,
        sig.s,
        sig.v,
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
