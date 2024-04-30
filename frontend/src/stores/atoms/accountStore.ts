import { atomWithStorage } from 'jotai/utils'
import { AccountType } from '@/types/accountType.ts'

const currentAccount = {
  account: null,
}

export const accountAtom = atomWithStorage<AccountType>(
  'currentAccount',
  currentAccount,
)
