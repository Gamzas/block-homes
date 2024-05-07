export interface KaikasResponse {
    status: string;
    type: string;
    chain_id: string;
    request_key: string;
    expiration_time: number;
    result?: {
        klaytn_address?: string;
    };
}
