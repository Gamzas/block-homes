export const contractABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_landlordAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tenantAddress',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: '_leasePeriod',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: '_deposit',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_propertyDID',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_contractDate',
        type: 'uint256',
      },
      {
        internalType: 'string[]',
        name: '_terms',
        type: 'string[]',
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
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'rentalContract',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'landlordDID',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tenantDID',
            type: 'string',
          },
          {
            internalType: 'uint16',
            name: 'leasePeriod',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'deposit',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'propertyDID',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'contractDate',
            type: 'uint256',
          },
          {
            internalType: 'string[]',
            name: 'terms',
            type: 'string[]',
          },
        ],
        internalType: 'struct LongTermRent.ContractInfo',
        name: 'contractInfo',
        type: 'tuple',
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
        internalType: 'struct LongTermRent.Signature',
        name: 'tenantSignature',
        type: 'tuple',
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
        internalType: 'struct LongTermRent.Signature',
        name: 'landlordSignature',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'returnDeposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
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
    ],
    name: 'tenantSign',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'verifyLandlordSignature',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'verifyTenantSignature',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
