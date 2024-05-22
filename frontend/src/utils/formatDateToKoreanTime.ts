import { BigNumber } from 'ethers'

export const formatDateToKoreanTime = bigNumberDate => {
  // BigNumber를 숫자로 변환 (밀리초 단위)
  const unixTimestamp = BigNumber.from(bigNumberDate).toNumber()

  // 유닉스 타임스탬프를 밀리초 단위로 변환하여 Date 객체 생성
  const date = new Date(unixTimestamp * 1000)

  // 한국 시간대 포맷 설정
  const koreanFormatter = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  // 한국 시간으로 포맷된 문자열 생성
  return koreanFormatter.format(date)
}
