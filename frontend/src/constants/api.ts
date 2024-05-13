export const API_BASE_URL = 'https://k10c203.p.ssafy.io'
export const API_BASE_PATH = '/api/v1'
export const API_BASE = `${API_BASE_URL}${API_BASE_PATH}`
export const API_BASE_HEADERS = {
  headers: {
    'Content-Type': 'application/json', // JSON 형식의 데이터를 보내기 위한 헤더 추가
  },
}

export const API_WALLET = `${API_BASE}/wallet`
export const API_WALLET_CHECK = `${API_WALLET}/check`

export const API_ITEM = `${API_BASE}/item`
export const API_ITEM_REGISTER = `${API_ITEM}/register`
