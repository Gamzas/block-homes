// 네트워크 주소
export const BLOCK_CHAIN_ENDPOINT = 'https://api.baobab.klaytn.net:8651'
// 스마트 컨트랙트 주소
export const CONTRACT_ADDRESS = '0x63f2211e20c769e1bdc730F1d0D314b27A229d59'
// ABI
export const ABI_ARRAY = [
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
        'indexed': false,
        'internalType': 'string',
        'name': 'did',
        'type': 'string',
      },
    ],
    'name': 'DIDCreated',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'did',
        'type': 'string',
      },
    ],
    'name': 'DIDDeleted',
    'type': 'event',
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
    'inputs': [
      {
        'internalType': 'string',
        'name': '_publicKey',
        'type': 'string',
      },
    ],
    'name': 'createDIDDocument',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'did',
        'type': 'string',
      },
    ],
    'name': 'deleteDIDDocument',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'did',
        'type': 'string',
      },
    ],
    'name': 'getDIDDocument',
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
            'components': [
              {
                'internalType': 'string',
                'name': 'id',
                'type': 'string',
              },
              {
                'internalType': 'string',
                'name': 'keyType',
                'type': 'string',
              },
              {
                'internalType': 'string',
                'name': 'controller',
                'type': 'string',
              },
              {
                'internalType': 'string',
                'name': 'publicKeyData',
                'type': 'string',
              },
            ],
            'internalType': 'struct DIDStruct.PublicKey',
            'name': 'publicKey',
            'type': 'tuple',
          },
          {
            'internalType': 'string',
            'name': 'authentication',
            'type': 'string',
          },
        ],
        'internalType': 'struct DIDStruct.DIDDocument',
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

export const TEST_ABI = JSON.stringify({
  'inputs': [
    {
      'internalType': 'string',
      'name': '_publicKey',
      'type': 'string',
    },
  ],
  'name': 'createDIDDocument',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function',
})