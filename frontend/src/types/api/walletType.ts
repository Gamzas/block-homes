export interface GetWalletParams {
  walletAddress: string
}

export interface GetWalletResponse {
  walletAddress: string
  userDID: string
  encPrivateKey: string
  name: string
}

export interface PostWalletParams {
  walletAddress: string
  encPrivateKey: string
  name: string
}

export interface PostWalletResponse {
  walletAddress: string
  encPrivateKey: string
  createdAt: string
}

export interface GetWalletCheckParams {
  name: string
  phoneNumber: string
}

export interface GetWalletCheckResponse {
  walletAddress: string
  userDID: string
}
