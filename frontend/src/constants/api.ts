export const API_BASE_URL = 'https://k10c203.p.ssafy.io'

export const API_BASE_PATH = '/api/v1'

export const API_BASE = `${API_BASE_URL}${API_BASE_PATH}`

export const API_HEADERS_JSON = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const API_HEADERS_FORM_DATA = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

export const API_WALLET = `${API_BASE}/wallet`

export const API_WALLET_CHECK = `${API_WALLET}/check`

export const API_ITEM = `${API_BASE}/item`

export const API_FAVORITE_ITEM = `/item/likes`

export const  API_ESTATE_ITEM = `/item/list`

export const API_ESTATE_DETAIL = `/item/detail`