export interface UserTypeType {
  type: number // 0 임차인 1 임대인
}

export interface UserType {
  userNo: number
  walletAddress: string
  name: string
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
