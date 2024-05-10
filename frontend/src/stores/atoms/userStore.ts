import { atomWithStorage } from 'jotai/utils'
import { UserType } from '@/types/userType'
import { atom } from 'jotai'

const currentUser = {
  type: 0, //0 임차인 1 임대인
}

export const userAtom = atomWithStorage<UserType>('currentUser', currentUser)

// FIX member 임시 데이터!!!
// DELETE 삭제 예쩡~
export const memberAtom = atom<boolean>(false)