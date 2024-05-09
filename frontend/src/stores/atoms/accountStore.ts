import { atomWithStorage } from 'jotai/utils'
import { ResultAuth } from '@/types/components/kaikasType'

const currentAccount = {
  klaytn_address: null,
}

export const accountAtom = atomWithStorage<ResultAuth>(
  'currentAccount',
  currentAccount,
)
