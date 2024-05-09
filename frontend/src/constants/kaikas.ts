export const KAIKAS_API_BASE_URL = 'https://api.kaikas.io/api/v1/k'

export const KAIKAS_API_BASE_HEADERS = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const KAIKAS_API_BASE_PREPARE_REQUEST_BODY = {
  chain_id: '1001',
  bapp: {
    name: 'Block Homes',
  },
}

export const KAIKAS_API_AUTH_TYPE = 'auth'
export const KAIKAS_API_SIGN_TYPE = 'sign'
export const KAIKAS_API_SEND_KLAY_TYPE = 'send_klay'
export const KAIKAS_API_CONTRACT_EXECUTION_TYPE = 'execute_contract'