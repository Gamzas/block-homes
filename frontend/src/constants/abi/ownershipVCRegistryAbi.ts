export const OWNERSHIP_VC_REGISTRY_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'VCcreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'VCdeleted',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_subject',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_issuanceDate',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: '_r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_s',
        type: 'bytes32',
      },
      {
        internalType: 'uint8',
        name: '_v',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: '_value',
        type: 'string',
      },
    ],
    name: 'claimCredential',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'deleteVC',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'getVC',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'issuer',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'subject',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'issuanceDate',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'r',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 's',
                type: 'bytes32',
              },
              {
                internalType: 'uint8',
                name: 'v',
                type: 'uint8',
              },
            ],
            internalType: 'struct OwnershipVCRegistry.Proof',
            name: 'proof',
            type: 'tuple',
          },
        ],
        internalType: 'struct OwnershipVCRegistry.Credential',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_id',
        type: 'string',
      },
    ],
    name: 'verifyCredential',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
