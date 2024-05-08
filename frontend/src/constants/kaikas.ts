export const KAIKAS_API_BASE_URL = 'https://api.kaikas.io/api/v1/k';

export const KAIKAS_API_BASE_HEADERS = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const KAIKAS_API_BASE_PREPARE_REQUEST_BODY = {
    chain_id: '1001',
    bapp: {
        name: 'Block Homes',
        callback: {
            success: 'https://block-homes.kr/signin',
            fail: 'https://block-homes.kr/signin'
        }
    },
}