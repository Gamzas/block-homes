export interface UserType {
  type: number // 0 임차인 1 임대인
}

export interface SignInParamsType {
  name: string
  phoneNumber: string
}

export interface SignUpParamsType {
  name: string
  phoneNumber: string
  walletAddress: string
  encryptionPrivateKey: string
}
