import axios from 'axios';
import {PrepareResponse, ResultResponse} from "@/types/components/kaikas";

const API_BASE_URL = 'https://api.kaikas.io/api/v1/k';

export const prepareAuthRequest = async (): Promise<PrepareResponse> => {
    const response = await axios.post(`${API_BASE_URL}/prepare`, {
        type: 'auth',
        bapp: {
            name: 'Block Homes',
            callback: {
                success: 'https://block-homes.kr/signin',
                fail: 'https://block-homes.kr/signin'
            }
        }
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export const getResult = async (request_key: string): Promise<ResultResponse> => {
    const response = await axios.get(`${API_BASE_URL}/result/${request_key}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}
