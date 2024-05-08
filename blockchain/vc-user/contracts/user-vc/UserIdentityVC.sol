// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../struct/VCstruct.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract userVCregistry is Ownable{

    mapping( string=> VCstruct.credential) credentials;

    constructor() Ownable(msg.sender) {}

    event VCcreated(string id);
    event VCdeleted(string id);

    function claimCredential(_id,_holderDID,_jws) external onlyOwner{
        require(credentials[_credential.credentialSubject.id] == 0, "Credential already issued");
        require(issuerAddress == msg.sender, "Not Issuer");

        VCstruct.credential memory newCredential;

        VCstruct.Name memory en;
        en.value="Republic of Korea";
        en.lang="en";

        VCstruct.Proof memory proof;
        proof.proofType="EcdsaSecp256k1Signature2019";
        proof.proofPurpose="assertionMethod";
        proof.verificationMethod="did:klay:0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4/keys-1";
        proof.jws=_jws;

        newCredential.context=["https://www.w3.org/2018/credentials/v1"];
        newCredential.id=_id;
        newCredential.credentialType=["VerifiableCredential","CitizenCredential"];
        newCredential.issuer="https://www.molit.go.kr/portal.do";
        newCredential.issuanceDate=block.timestamp;
        newCredential.credentialSubject.id=_holderDID;
        newCredential.CredentialSubject.CitizenOf.id="did:klay:0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4";
        newCredential.CredentialSubject.CitizenOf.name=[en];
        newCredential.proof=proof;

        credentials[newCredential.id] = newCredential;

        emit VCcreated(newCredential.id);
    }

    function getVC(string calldata id) external view returns (credentials.credential memory) {
        return credentials[id];
    }

    function deleteVC(string calldata id) external onlyOwner {
        delete credentials[id];
        emit VCDeleted(id);
    }

}