import { useMutation } from '@tanstack/react-query'
import { CreateDIDDocumentInputs } from '@/types/abi/userDiDRegistryType'
import { baseUserDIDRegistryContract } from '@/abi/userDIDRegistry/baseUserDIDRegistryContract'
import { TxType, Wallet } from '@klaytn/ethers-ext'
import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'

export const useCreateDIDDocument = () => {
  return useMutation({
    mutationFn: async ({ wallet, params }: { wallet: Wallet, params: CreateDIDDocumentInputs }) => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
        const feePayerWallet = new Wallet('', provider)
        const contract = baseUserDIDRegistryContract(wallet)
        // 클레이튼에서는 수수료 대납 처리를 네트워크 레벨에서 지원하므로 가스 설정은 선택적
        const data = (await contract.populateTransaction.createDIDDocument(params.publicKey)).data
        const tx = {
          type: TxType.FeeDelegatedSmartContractExecution,
          from: wallet.address,
          to: contract.address,
          data: data,
        }

        // Sign transaction by sender
        const populatedTx = await wallet.populateTransaction(tx)
        const senderTxHashRLP = await wallet.signTransaction(populatedTx)
        console.log('senderTxHashRLP', senderTxHashRLP)

        // Sign and send transaction by fee payer
        const sentTx = await feePayerWallet.sendTransactionAsFeePayer(senderTxHashRLP)
        const receipt = await sentTx.wait()
        console.log('receipt', receipt)

        console.log('number after', (await contract.number()).toString())
      } catch (error) {
        console.error('트랜잭션 실행 오류:', error)
      }
    },
    onError: (error) => {
      console.error('Error creating DID document:', error)
    },
  })
}
