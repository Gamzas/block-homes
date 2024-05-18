import { atomWithStorage } from 'jotai/utils'
import { UserType, UserTypeType } from '@/types/userType'
import { atom } from 'jotai'

const currentUserType = {
  type: 0, //0 임차인 1 임대인
}

const currentUser = {
  walletAddress: '',
  name: '',
}

export const userTypeAtom = atomWithStorage<UserTypeType>(
  'currentUserType',
  currentUserType,
)

export const userAtom = atomWithStorage<UserType>('currentUser', currentUser)

export const userModeAtom = atom(0)
