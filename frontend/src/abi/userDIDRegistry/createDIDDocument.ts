import { useMutation } from '@tanstack/react-query'
import { CreateDIDDocumentInputs } from '@/types/abi/userDiDRegistryType'
import { baseUserDIDRegistryContract } from '@/abi/userDIDRegistry/baseUserDIDRegistryContract'
import {
  BLOCK_CHAIN_ENDPOINT,
  USER_DID_REGISTRY_CONTRACT_ADDRESS,
} from '@constants/abi/abi'
import { JsonRpcProvider, TxType, Wallet } from '@klaytn/ethers-ext'
import { ethers } from 'ethers'
import { USER_DID_REGISTRY_ABI } from '@constants/abi/userDIDRegistryAbi'

export const useCreateDIDDocument = () => {
  return useMutation({
    mutationFn: async ({
      wallet,
      params,
    }: {
      wallet: Wallet
      params: CreateDIDDocumentInputs
    }) => {
      try {
        const provider = new JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
        const contract = new ethers.Contract(
          USER_DID_REGISTRY_CONTRACT_ADDRESS,
          USER_DID_REGISTRY_ABI,
          wallet,
        )
        const feePayerWallet = new Wallet(
          '0xfdb063ba30ff72e37a260e17582a953cc85dcb20a71f6fee83a4bb89e7ea8910',
          provider,
        )
        const data = contract.interface.encodeFunctionData(
          'createDIDDocument',
          [params.publicKey],
        )
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
        const sentTx =
          await feePayerWallet.sendTransactionAsFeePayer(senderTxHashRLP)
        const receipt = await sentTx.wait()
        console.log('receipt', receipt)
      } catch (error) {
        console.error('트랜잭션 실행 오류:', error)
      }
    },
    onError: error => {
      console.error('Error creating DID document:', error)
    },
  })
}
