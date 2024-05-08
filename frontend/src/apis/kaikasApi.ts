import axios from 'axios';
import {PrepareResponse, ResultResponse} from "@/types/components/kaikasType";
import {KAIKAS_API_BASE_HEADERS, KAIKAS_API_BASE_PREPARE_REQUEST_BODY, KAIKAS_API_BASE_URL} from "@constants/kaikas";


export const prepareAuthRequest = async (): Promise<PrepareResponse> => {
    const response = await axios.post<PrepareResponse>(`${KAIKAS_API_BASE_URL}/prepare`, {
        ...KAIKAS_API_BASE_PREPARE_REQUEST_BODY,
        type: 'auth',
    }, KAIKAS_API_BASE_HEADERS);
    return response.data;
}

export const getResult = async (request_key: string): Promise<ResultResponse> => {
    const response = await axios.get<ResultResponse>(`${KAIKAS_API_BASE_URL}/result/${request_key}`, KAIKAS_API_BASE_HEADERS);
    return response.data;
}
