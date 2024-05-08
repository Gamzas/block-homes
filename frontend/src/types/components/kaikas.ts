import {AccountType} from "@/types/accountType";

export interface PrepareResponse {
    chain_id: string;
    request_key: string;
    status: string;
    expiration_time: number;
}

export interface AuthResult {
    klaytn_address: AccountType;
}

export interface ResultResponse {
    status: string;
    type: string;
    chain_id: string;
    request_key: string;
    expiration_time: number;
    result: AuthResult | null;
}