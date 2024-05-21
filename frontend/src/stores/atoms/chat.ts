import { atom } from 'jotai/index'
import { atomFamily } from 'jotai/utils'

export const isGoNextStepAtom = atom<boolean>(false)

export const chatRoomNoAtom = atom<number>(0)

export const provisionsAtomFamily = atomFamily((chatRoomNo: number) =>
  atom<boolean[]>([false, false, false, false, false, false]),
)

export const provisionIsCancelAtomFamily = atomFamily((chatRoomNo: number) =>
  atom(false),
)
