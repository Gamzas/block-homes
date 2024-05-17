export const REAL_ESTATE_INFO_ABI = [
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
    'inputs': [],
    'name': 'getRealEstateInfo',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'string',
            'name': 'roadNameAddress',
            'type': 'string',
          },
          {
            'internalType': 'string',
            'name': 'buildingName',
            'type': 'string',
          },
          {
            'internalType': 'uint16',
            'name': 'buildingNumber',
            'type': 'uint16',
          },
          {
            'internalType': 'uint16',
            'name': 'roomNumber',
            'type': 'uint16',
          },
          {
            'internalType': 'bool',
            'name': 'isViolated',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': 'isNotPermitted',
            'type': 'bool',
          },
          {
            'internalType': 'uint8',
            'name': 'estateType',
            'type': 'uint8',
          },
          {
            'internalType': 'string',
            'name': 'area',
            'type': 'string',
          },
          {
            'internalType': 'uint256',
            'name': 'date',
            'type': 'uint256',
          },
          {
            'internalType': 'string',
            'name': 'purpose',
            'type': 'string',
          },
        ],
        'internalType': 'struct realEstateInfo.BasicInfo',
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