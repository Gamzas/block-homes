import { ethers } from 'ethers'

export interface GetDIDDocumentInputs {
  userWallet: ethers.Wallet
  realEstateDID: string
}
