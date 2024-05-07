// utils/kaikasApi.js
import axios from 'axios';
import {KaikasResponse} from "@/types/components/kaikas";

const KAISKAS_API_URL = 'https://api.kaikas.io/api/v1/k/prepare';

export const authenticateWithKaikas = async (): Promise<KaikasResponse> => {
    const requestBody = {
        type: "auth",
        bapp: {
            name: "Your App Name",
            callback: {
                success: "https://www.yourwebsite.com/success",
                fail: "https://www.yourwebsite.com/fail"
            }
        }
    };

    try {
        const response = await axios.post(KAISKAS_API_URL, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data && response.data.request_key) {
            const mobileAppUrl = `https://app.kaikas.io/u/https://block-homes.kr/process?key=${response.data.request_key}`;
            window.open(mobileAppUrl, '_blank');
        }

        return response.data;
    } catch (error) {
        console.error('Error connecting to Kaikas:', error);
        throw error;
    }
};
