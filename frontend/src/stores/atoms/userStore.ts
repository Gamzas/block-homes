import { atomWithStorage } from 'jotai/utils'
import { UserType } from '@/types/userType'

const currentUser = {
  type: 0, //0 임차인 1 임대인
}

export const userAtom = atomWithStorage<UserType>('currentUser', currentUser)
