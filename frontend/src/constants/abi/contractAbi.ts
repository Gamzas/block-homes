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
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'payDeposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
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
        internalType: 'bytes32',
        name: 'contractInfoHash',
        type: 'bytes32',
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
    inputs: [],
    name: 'verifyContract',
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
