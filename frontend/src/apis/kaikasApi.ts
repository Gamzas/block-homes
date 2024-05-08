import axios from 'axios'
import { PrepareResponse, ResultResponse } from '@/types/components/kaikasType'
import { KAIKAS_API_BASE_HEADERS, KAIKAS_API_BASE_PREPARE_REQUEST_BODY, KAIKAS_API_BASE_URL } from '@constants/kaikas'


export const prepareAuthRequest = async (): Promise<PrepareResponse> => {
  const response = await axios.post<PrepareResponse>(`${KAIKAS_API_BASE_URL}/prepare`, {
    ...KAIKAS_API_BASE_PREPARE_REQUEST_BODY,
    type: 'auth',
  }, KAIKAS_API_BASE_HEADERS)
  return response.data
}

export const prepareClaimCredentialRequest = async (): Promise<PrepareResponse> => {
  const response = await axios.post<PrepareResponse>(`${KAIKAS_API_BASE_URL}/prepare`, {
    ...KAIKAS_API_BASE_PREPARE_REQUEST_BODY,
    type: 'execute_contract',
    transaction: {
      abi: {
        'inputs': [
          {
            'components': [
              {
                'internalType': 'string',
                'name': 'context',
                'type': 'string',
              },
              {
                'internalType': 'string',
                'name': 'id',
                'type': 'string',
              },
              {
                'internalType': 'string',
                'name': 'credentialType',
                'type': 'string',
              },
              {
                'internalType': 'string',
                'name': 'issuer',
                'type': 'string',
              },
              {
                'internalType': 'uint256',
                'name': 'issuanceDate',
                'type': 'uint256',
              },
              {
                'components': [
                  {
                    'internalType': 'string',
                    'name': 'id',
                    'type': 'string',
                  },
                  {
                    'components': [
                      {
                        'internalType': 'string',
                        'name': 'id',
                        'type': 'string',
                      },
                      {
                        'components': [
                          {
                            'internalType': 'string',
                            'name': 'value',
                            'type': 'string',
                          },
                          {
                            'internalType': 'string',
                            'name': 'lang',
                            'type': 'string',
                          },
                        ],
                        'internalType': 'struct OwnershipVCStruct.Name',
                        'name': 'name',
                        'type': 'tuple',
                      },
                    ],
                    'internalType': 'struct OwnershipVCStruct.OwnerOf',
                    'name': 'ownerOf',
                    'type': 'tuple',
                  },
                ],
                'internalType': 'struct OwnershipVCStruct.CredentialSubject',
                'name': 'credentialSubject',
                'type': 'tuple',
              },
              {
                'components': [
                  {
                    'internalType': 'string',
                    'name': 'proofType',
                    'type': 'string',
                  },
                  {
                    'internalType': 'string',
                    'name': 'proofPurpose',
                    'type': 'string',
                  },
                  {
                    'internalType': 'string',
                    'name': 'verificationMethod',
                    'type': 'string',
                  },
                  {
                    'internalType': 'string',
                    'name': 'jws',
                    'type': 'string',
                  },
                ],
                'internalType': 'struct OwnershipVCStruct.Proof',
                'name': 'proof',
                'type': 'tuple',
              },
            ],
            'internalType': 'struct OwnershipVCStruct.Credential',
            'name': '_inputCredential',
            'type': 'tuple',
          },
        ],
        'name': 'claimCredential',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      value: '0',
      to: '0x98f5E0a37d17877125d4B00De9E474dbEbE8A01C',
      params: {
        context: 'http://example.org',
        id: 'credential-123',
        credentialType: 'OwnershipCredential',
        issuer: '0xIssuerAddress',
        issuanceDate: 1625097600,
        credentialSubject: {
          id: '0xSubjectAddress',
          ownerOf: {
            id: '0xOwnerAddress',
            name: {
              value: 'John Doe',
              lang: 'en',
            },
          },
        },
        proof: {
          proofType: 'Ecdsa',
          proofPurpose: 'assertionMethod',
          verificationMethod: '0xVerificationMethod',
          jws: 'signatureValue',
        },
      },
    },
  }, KAIKAS_API_BASE_HEADERS)
  return response.data
}

export const getResult = async (request_key: string): Promise<ResultResponse> => {
  const response = await axios.get<ResultResponse>(`${KAIKAS_API_BASE_URL}/result/${request_key}`, KAIKAS_API_BASE_HEADERS)
  return response.data
}
