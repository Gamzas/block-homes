import { atom } from 'jotai/index'

export const isGoNextStepAtom = atom<boolean>(false)

export const chatRoomNoAtom = atom<number>(0)

export const provisionsAtom = atom<boolean[]>([
  false,
  false,
  false,
  false,
  false,
  false,
])
