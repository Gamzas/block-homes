// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../struct/VCstruct.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract userVCregistry is Ownable{

    mapping( string=> VCstruct.Credential) credentials;

    constructor() Ownable(msg.sender) {}

    event VCcreated(string id);
    event VCdeleted(string id);

    function claimCredential(VCstruct.Credential memory _inputCredential) external onlyOwner{
        require(credentials[_inputCredential.credentialSubject.id].issuanceDate == 0, "Credential already issued");

        VCstruct.Credential memory newCredential;

        newCredential.context=_inputCredential.context;
        newCredential.id=_inputCredential.id;
        newCredential.credentialType=_inputCredential.credentialType;
        newCredential.issuer=_inputCredential.issuer;
        newCredential.issuanceDate=block.timestamp;
        newCredential.credentialSubject.id=_inputCredential.credentialSubject.id;
        newCredential.credentialSubject.citizenOf.id=_inputCredential.credentialSubject.citizenOf.id;
        newCredential.credentialSubject.citizenOf.name=_inputCredential.credentialSubject.citizenOf.name;
        newCredential.proof=_inputCredential.proof;

        credentials[newCredential.id] = newCredential;

        emit VCcreated(newCredential.id);
    }

    function getVC(string calldata id) external view returns (VCstruct.Credential memory) {
        return credentials[id];
    }

    function deleteVC(string calldata id) external onlyOwner {
        delete credentials[id];
        emit VCdeleted(id);
    }

}