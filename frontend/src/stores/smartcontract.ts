import { atom } from 'jotai'

export const contractStepAtom = atom<number>(0)

export const readContractStepAtom = atom<number>(get => get(contractStepAtom))

// export const setContractStepAtom = atom(null, (get, set, update: number) => {
//   set(contractStepAtom, update)
// })
