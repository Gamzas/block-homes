export const REAL_ESTATE_DID_REGISTRY_ABI = [
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
    'constant': true,
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
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': 'length',
        'type': 'uint256',
      },
    ],
    'name': 'toHexString',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string',
      },
    ],
    'stateMutability': 'pure',
    'type': 'function',
    'constant': true,
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '_roadNameAddress',
        'type': 'string',
      },
      {
        'internalType': 'string',
        'name': '_buildingName',
        'type': 'string',
      },
      {
        'internalType': 'uint16',
        'name': '_buildingNumber',
        'type': 'uint16',
      },
      {
        'internalType': 'uint16',
        'name': '_roomNumber',
        'type': 'uint16',
      },
      {
        'internalType': 'bool',
        'name': '_isViolated',
        'type': 'bool',
      },
      {
        'internalType': 'bool',
        'name': '_isNotPermitted',
        'type': 'bool',
      },
      {
        'internalType': 'uint8',
        'name': '_estateType',
        'type': 'uint8',
      },
      {
        'internalType': 'string',
        'name': '_area',
        'type': 'string',
      },
      {
        'internalType': 'uint256',
        'name': '_date',
        'type': 'uint256',
      },
      {
        'internalType': 'string',
        'name': '_purpose',
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
            ],
            'internalType': 'struct RealEstateDIDRegistry.PublicKey',
            'name': 'publicKey',
            'type': 'tuple',
          },
          {
            'internalType': 'string',
            'name': 'authentication',
            'type': 'string',
          },
        ],
        'internalType': 'struct RealEstateDIDRegistry.DIDDocument',
        'name': '',
        'type': 'tuple',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
    'constant': true,
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
]