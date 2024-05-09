import axios from 'axios'
import { PrepareResponse, ResultResponse } from '@/types/components/kaikasType'
import { KAIKAS_API_BASE_HEADERS, KAIKAS_API_BASE_PREPARE_REQUEST_BODY, KAIKAS_API_BASE_URL } from '@constants/kaikas'
import { claimCredentialFunction, contractAddress } from '@constants/contract'


export const prepareAuthRequest = async (): Promise<PrepareResponse> => {
  const response = await axios.post<PrepareResponse>(`${KAIKAS_API_BASE_URL}/prepare`, {
    ...KAIKAS_API_BASE_PREPARE_REQUEST_BODY,
    type: 'auth',
  }, KAIKAS_API_BASE_HEADERS)
  return response.data
}

// 가정된 claimCredentialFunction의 매개변수에 대한 JSON 배열 생성
const paramsArray = [
  'http://example.org',  // context
  'credential-123',      // id
  'OwnershipCredential', // credentialType
  '0xIssuerAddress',     // issuer
  1625097600,          // issuanceDate
  '0xSubjectAddress',    // credentialSubject.id
  '0xOwnerAddress',      // credentialSubject.ownerOf.id
  'John Doe',            // credentialSubject.ownerOf.name.value
  'en',                  // credentialSubject.ownerOf.name.lang
  'Ecdsa',               // proof.proofType
  'assertionMethod',     // proof.proofPurpose
  '0xVerificationMethod',// proof.verificationMethod
  'signatureValue',       // proof.jws
]

// JSON 배열을 문자열로 인코딩
const paramsString = JSON.stringify(paramsArray)

export const prepareClaimCredentialRequest = async (): Promise<PrepareResponse> => {
  const response = await axios.post<PrepareResponse>(`${KAIKAS_API_BASE_URL}/prepare`, {
    ...KAIKAS_API_BASE_PREPARE_REQUEST_BODY,
    type: 'execute_contract',
    transaction: {
      abi: JSON.stringify(claimCredentialFunction),
      value: '0',
      to: contractAddress,
      params: paramsString,
    },
  }, KAIKAS_API_BASE_HEADERS)
  return response.data
}

export const getResult = async (request_key: string): Promise<ResultResponse> => {
  const response = await axios.get<ResultResponse>(`${KAIKAS_API_BASE_URL}/result/${request_key}`, KAIKAS_API_BASE_HEADERS)
  return response.data
}
