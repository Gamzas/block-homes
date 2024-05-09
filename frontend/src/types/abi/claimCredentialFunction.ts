export interface ICredentialSubject {
  id: string;
  ownerOf: IOwnerOf;
}

export interface IOwnerOf {
  id: string;
  name: IName;
}

export interface IName {
  value: string;
  lang: string;
}

export interface IProof {
  proofType: string;
  proofPurpose: string;
  verificationMethod: string;
  jws: string;
}

export interface ICredential {
  context: string;
  id: string;
  credentialType: string;
  issuer: string;
  issuanceDate: number;
  credentialSubject: ICredentialSubject;
  proof: IProof;
}
