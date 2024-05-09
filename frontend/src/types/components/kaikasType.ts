export interface PrepareSignRequest {
  message: string;
}

export interface PrepareSendKlayRequest {
  to: string;
  amount: string;
}

export interface PrepareContractExecutionRequest {
  abi: string;
  value: string;
  to: string;
  params: string;
}

export interface PrepareRequest {
  type: string;
  sign?: PrepareSignRequest,
  transaction?: PrepareSendKlayRequest | PrepareContractExecutionRequest
}

export interface PrepareResponse {
  chain_id: string;
  request_key: string;
  status: string;
  expiration_time: number;
}

export interface ResultAuth {
  klaytn_address: string;
}

export interface ResultSign {
  address: string;
  signed_data: string;
}

export interface ResultContractExecution {
  signed_tx: string;
  tx_hash: string;
}


export interface ResultResponse {
  status: string;
  type: string;
  chain_id: string;
  request_key: string;
  expiration_time: number;
  result: ResultAuth | ResultSign | ResultContractExecution;
}

export interface AtomRequestKey {
  request_key: string;
}