import { atomWithStorage } from 'jotai/utils'
import { UserType, UserTypeType } from '@/types/userType'
import { atom } from 'jotai'

const currentUserType = {
  type: 0, //0 임차인 1 임대인
}

const currentUser = {
  userNo: 0,
  walletAddress: '',
  name: '',
}

export const userTypeAtom = atomWithStorage<UserTypeType>(
  'currentUserType',
  currentUserType,
)

export const userAtom = atomWithStorage<UserType>('currentUser', currentUser)

// FIX member 임시 데이터!!!
// DELETE 삭제 예쩡~
export const memberAtom = atom<boolean>(false)
