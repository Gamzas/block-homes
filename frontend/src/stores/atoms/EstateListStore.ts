import { atom } from 'jotai'

export const filterAtom = atom<boolean>(false) // false 필터 닫힘, true 필터 열림

export const mapAtom = atom<boolean>(false) // false list true map

