import {atomWithStorage} from 'jotai/utils'
import {AuthResult} from "@/types/components/kaikasType";

const currentAccount = {
    klaytn_address: null,
}

export const accountAtom = atomWithStorage<AuthResult>(
    'currentAccount',
    currentAccount,
)
