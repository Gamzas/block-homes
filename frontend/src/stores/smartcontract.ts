import { WalletData } from '@/types/components/estateContractType'
import { atom } from 'jotai'

export const contractStepAtom = atom<number>(0)

export const readContractStepAtom = atom<number>(get => get(contractStepAtom))

// export const setContractStepAtom = atom(null, (get, set, update: number) => {
//   set(contractStepAtom, update)
// })

// 전역 상태로 관리할 atom 생성

export const landLordAtom = atom<WalletData>({
  name: '',
  userDID: '',
  walletAddress: '',
})

export const tenantAtom = atom<WalletData>({
  name: '',
  userDID: '',
  walletAddress: '',
})

// 오늘 날짜 포맷 함수
const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 특정 달을 더한 날짜 계산 함수
const addMonths = (date: Date, months: number): string => {
  const result = new Date(date)
  result.setMonth(result.getMonth() + months)
  return getFormattedDate(result)
}

// 오늘 날짜 계산
const today = new Date()
const formattedToday = getFormattedDate(today)

// 초기 날짜와 계약 종료 날짜를 저장할 atom
export const todayAtom = atom(formattedToday)
export const contractEndDateAtom = atom(get => {
  const contractMonths = get(contractMonthsAtom)
  return addMonths(today, contractMonths)
})

// 계약 달수를 저장할 atom
export const contractMonthsAtom = atom(0)
