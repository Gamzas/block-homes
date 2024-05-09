export interface ConstructorABI {
  inputs: [];
  stateMutability: 'nonpayable';
  type: 'constructor';
}

export interface OwnableInvalidOwnerError {
  inputs: [
    {
      internalType: 'address';
      name: 'owner';
      type: 'address';
    }
  ];
  name: 'OwnableInvalidOwner';
  type: 'error';
}

export interface OwnableUnauthorizedAccountError {
  inputs: [
    {
      internalType: 'address';
      name: 'account';
      type: 'address';
    }
  ];
  name: 'OwnableUnauthorizedAccount';
  type: 'error';
}

export interface OwnershipTransferredEvent {
  anonymous: boolean;
  inputs: [
    {
      indexed: true;
      internalType: 'address';
      name: 'previousOwner';
      type: 'address';
    },
    {
      indexed: true;
      internalType: 'address';
      name: 'newOwner';
      type: 'address';
    }
  ];
  name: 'OwnershipTransferred';
  type: 'event';
}

export interface VCcreatedEvent {
  anonymous: boolean;
  inputs: [
    {
      indexed: false;
      internalType: 'string';
      name: 'id';
      type: 'string';
    }
  ];
  name: 'VCcreated';
  type: 'event';
}

export interface VCdeletedEvent {
  anonymous: boolean;
  inputs: [
    {
      indexed: false;
      internalType: 'string';
      name: 'id';
      type: 'string';
    }
  ];
  name: 'VCdeleted';
  type: 'event';
}

export interface ClaimCredentialFunction {
  inputs: [
    {
      components: [
        {
          internalType: 'string';
          name: 'context';
          type: 'string';
        },
        {
          internalType: 'string';
          name: 'id';
          type: 'string';
        },
        // 여기에 나머지 속성을 추가하세요
      ];
      internalType: 'struct OwnershipVCStruct.Credential';
      name: '_inputCredential';
      type: 'tuple';
    }
  ];
  name: 'claimCredential';
  outputs: [];
  stateMutability: 'nonpayable';
  type: 'function';
}

export interface DeleteVCFunction {
  inputs: [
    {
      internalType: 'string';
      name: 'id';
      type: 'string';
    }
  ];
  name: 'deleteVC';
  outputs: [];
  stateMutability: 'nonpayable';
  type: 'function';
}

export interface GetVCFunction {
  inputs: [
    {
      internalType: 'string';
      name: 'id';
      type: 'string';
    }
  ];
  name: 'getVC';
  outputs: [
    {
      components: [
        // `claimCredentialFunction` 인터페이스와 같이 모든 구성 요소를 명시하세요
      ];
      internalType: 'struct OwnershipVCStruct.Credential';
      name: '';
      type: 'tuple';
    }
  ];
  stateMutability: 'view';
  type: 'function';
}

export interface OwnerFunction {
  inputs: [];
  name: 'owner';
  outputs: [
    {
      internalType: 'address';
      name: '';
      type: 'address';
    }
  ];
  stateMutability: 'view';
  type: 'function';
}

export interface RenounceOwnershipFunction {
  inputs: [];
  name: 'renounceOwnership';
  outputs: [];
  stateMutability: 'nonpayable';
  type: 'function';
}

export interface TransferOwnershipFunction {
  inputs: [
    {
      internalType: 'address';
      name: 'newOwner';
      type: 'address';
    }
  ];
  name: 'transferOwnership';
  outputs: [];
  stateMutability: 'nonpayable';
  type: 'function';
}
