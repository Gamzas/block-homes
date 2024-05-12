// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../structs/CitizenVCStruct.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UserIdentityVCRegistry is Ownable{

    mapping( string=> CitizenVCStruct.Credential) credentials;

    uint256 serialNum;
    constructor() Ownable(msg.sender) {
        serialNum=1;
    }

    event VCcreated(string id);
    event VCdeleted(string id);

    function claimCredential(string calldata _targetDID) external onlyOwner{

        CitizenVCStruct.Credential memory newCredential;

        newCredential.context="https://www.w3.org/2018/credentials/v1";
        newCredential.id=string(abi.encodePacked("www.mois.go.kr/credentials/",Strings.toString(serialNum)));
        newCredential.credentialType="VerifiableCredential";
        newCredential.issuer="www.molit.go.kr/issuers/938472";
        newCredential.issuanceDate=block.timestamp;
        newCredential.credentialSubject.id=_targetDID;

        credentials[newCredential.id] = newCredential;

        emit VCcreated(newCredential.id);
    }

    function getVC(string calldata id) external view returns (CitizenVCStruct.Credential memory) {
        return credentials[id];
    }

    function deleteVC(string calldata id) external onlyOwner {
        delete credentials[id];
        emit VCdeleted(id);
    }

}