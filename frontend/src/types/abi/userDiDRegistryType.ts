export interface CreateDIDDocumentInputs {
  publicKey: string;
}

export interface DIDInputs {
  did: string
}

export interface GetDIDDocumentOutputs {
  context: string
  id: string
  publicKey: {
    id: string
    keyType: string
    controller: string
    publicKeyHex: string
  }
  authentication: string
  service: {
    id: string
    serviceType: string
    serviceEndPoint: string
  }
}