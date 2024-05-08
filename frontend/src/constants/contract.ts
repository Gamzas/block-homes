// 네트워크 주소
export const blockChainEndpoint = 'https://api.baobab.klaytn.net:8651'
// 스마트 컨트랙트 주소
export const contractAddress = '0x98f5E0a37d17877125d4B00De9E474dbEbE8A01C'
// ABI
export const contractABI = [
  {
    'inputs': [],
    'stateMutability': 'nonpayable',
    'type': 'constructor',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address',
      },
    ],
    'name': 'OwnableInvalidOwner',
    'type': 'error',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address',
      },
    ],
    'name': 'OwnableUnauthorizedAccount',
    'type': 'error',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address',
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address',
      },
    ],
    'name': 'OwnershipTransferred',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'id',
        'type': 'string',
      },
    ],
    'name': 'VCcreated',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'id',
        'type': 'string',
      },
    ],
    'name': 'VCdeleted',
    'type': 'event',
  },
  {
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
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'id',
        'type': 'string',
      },
    ],
    'name': 'deleteVC',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'id',
        'type': 'string',
      },
    ],
    'name': 'getVC',
    'outputs': [
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
        'name': '',
        'type': 'tuple',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'renounceOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address',
      },
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
]

export const constructorABI = {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
};

export const OwnableInvalidOwnerError = {
  "inputs": [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  "name": "OwnableInvalidOwner",
  "type": "error"
};

export const OwnableUnauthorizedAccountError = {
  "inputs": [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  "name": "OwnableUnauthorizedAccount",
  "type": "error"
};

export const OwnershipTransferredEvent = {
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
};

export const VCcreatedEvent = {
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "string",
      "name": "id",
      "type": "string"
    }
  ],
  "name": "VCcreated",
  "type": "event"
};

export const VCdeletedEvent = {
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "string",
      "name": "id",
      "type": "string"
    }
  ],
  "name": "VCdeleted",
  "type": "event"
};

export const claimCredentialFunction = {
  "inputs": [
    {
      "components": [
        {
          "internalType": "string",
          "name": "context",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "credentialType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "issuanceDate",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "id",
                  "type": "string"
                },
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "value",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lang",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct OwnershipVCStruct.Name",
                  "name": "name",
                  "type": "tuple"
                }
              ],
              "internalType": "struct OwnershipVCStruct.OwnerOf",
              "name": "ownerOf",
              "type": "tuple"
            }
          ],
          "internalType": "struct OwnershipVCStruct.CredentialSubject",
          "name": "credentialSubject",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "proofType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "proofPurpose",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "verificationMethod",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "jws",
              "type": "string"
            }
          ],
          "internalType": "struct OwnershipVCStruct.Proof",
          "name": "proof",
          "type": "tuple"
        }
      ],
      "internalType": "struct OwnershipVCStruct.Credential",
      "name": "_inputCredential",
      "type": "tuple"
    }
  ],
  "name": "claimCredential",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
};

export const deleteVCFunction = {
  "inputs": [
    {
      "internalType": "string",
      "name": "id",
      "type": "string"
    }
  ],
  "name": "deleteVC",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
};

export const getVCFunction = {
  "inputs": [
    {
      "internalType": "string",
      "name": "id",
      "type": "string"
    }
  ],
  "name": "getVC",
  "outputs": [
    {
      "components": [
        {
          "internalType": "string",
          "name": "context",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "credentialType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "issuanceDate",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "id",
                  "type": "string"
                },
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "value",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lang",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct OwnershipVCStruct.Name",
                  "name": "name",
                  "type": "tuple"
                }
              ],
              "internalType": "struct OwnershipVCStruct.OwnerOf",
              "name": "ownerOf",
              "type": "tuple"
            }
          ],
          "internalType": "struct OwnershipVCStruct.CredentialSubject",
          "name": "credentialSubject",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "proofType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "proofPurpose",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "verificationMethod",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "jws",
              "type": "string"
            }
          ],
          "internalType": "struct OwnershipVCStruct.Proof",
          "name": "proof",
          "type": "tuple"
        }
      ],
      "internalType": "struct OwnershipVCStruct.Credential",
      "name": "",
      "type": "tuple"
    }
  ],
  "stateMutability": "view",
  "type": "function"
};

export const ownerFunction = {
  "inputs": [],
  "name": "owner",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
};

export const renounceOwnershipFunction = {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
};

export const transferOwnershipFunction = {
  "inputs": [
    {
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
};
