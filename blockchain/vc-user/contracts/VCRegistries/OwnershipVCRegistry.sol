// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../structs/OwnershipVCStruct.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OwnershipVCRegistry is Ownable{

    mapping( string=> OwnershipVCStruct.Credential) credentials;

    constructor() Ownable(msg.sender) {}

    event VCcreated(string id);
    event VCdeleted(string id);

    function claimCredential(OwnershipVCStruct.Credential memory _inputCredential) external onlyOwner{

        OwnershipVCStruct.Credential memory newCredential;

        newCredential.context=_inputCredential.context;
        newCredential.id=_inputCredential.id;
        newCredential.credentialType=_inputCredential.credentialType;
        newCredential.issuer=_inputCredential.issuer;
        newCredential.issuanceDate=block.timestamp;
        newCredential.credentialSubject.id=_inputCredential.credentialSubject.id;
        newCredential.credentialSubject.ownerOf.id=_inputCredential.credentialSubject.ownerOf.id;
        newCredential.credentialSubject.ownerOf.name=_inputCredential.credentialSubject.ownerOf.name;
        newCredential.proof=_inputCredential.proof;

        credentials[newCredential.id] = newCredential;

        emit VCcreated(newCredential.id);
    }

    function getVC(string calldata id) external view returns (OwnershipVCStruct.Credential memory) {
        return credentials[id];
    }

    function deleteVC(string calldata id) external onlyOwner {
        delete credentials[id];
        emit VCdeleted(id);
    }

}