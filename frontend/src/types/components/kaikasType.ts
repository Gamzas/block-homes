export interface PrepareResponse {
    chain_id: string;
    request_key: string;
    status: string;
    expiration_time: number;
}

export interface AuthResult {
    klaytn_address: string | null; // 0xc14E094bEc4432D732Cd514CcDEEba332a9Af8aF
}

export interface ResultResponse {
    status: string;
    type: string;
    chain_id: string;
    request_key: string;
    expiration_time: number;
    result: AuthResult | null;
}