// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CitizenshipVCRegistry is Ownable{

    struct Proof{
        bytes32 r;
        bytes32 s;
        uint8 v;
    }

    struct Credential{
        string issuer;
        string subject;
        uint256 issuanceDate;
        string value; //대한민국 국민임을 증명 
        Proof proof;
    }

    mapping( string => Credential) credentials;
    constructor() Ownable(msg.sender) {}

    event VCcreated(string id);
    event VCdeleted(string id);

    function getMessageHash(
        string memory _subject, uint256 _issuanceDate, string memory  _value) private pure returns (bytes32){
        return keccak256(abi.encodePacked(_subject, _issuanceDate,_value));
    }

    function claimCredential(
        string calldata _subject, uint256 _issuanceDate, bytes32 _r, bytes32 _s, uint8 _v) external onlyOwner{

        Credential storage newCredential = credentials[_subject];
        newCredential.issuer="did:klay:0x47a54b46770cc839830cbb150f7fa49c90e880ac"; //행정안전부의 DID
        newCredential.subject=_subject;
        newCredential.issuanceDate=_issuanceDate;
        newCredential.value="Republic of Korea";
        newCredential.proof=Proof(_r,_s,_v);

        emit VCcreated(newCredential.subject);
    }

    function verifyCredential(string memory _id) public view returns (bool) {
        Credential storage vc = credentials[_id];
        bytes32 messageHash = getMessageHash(vc.subject, vc.issuanceDate, vc.value);
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash)
        );

        // ecrecover를 사용하여 서명자 주소 복구
        address recoveredSigner = ecrecover(ethSignedMessageHash, vc.proof.v, vc.proof.r, vc.proof.s);
        return (recoveredSigner == owner());
    }

    function getVC(string calldata id) external view returns (Credential memory) {
        return credentials[id];
    }

    function deleteVC(string calldata id) external onlyOwner {
        delete credentials[id];
        emit VCdeleted(id);
    }

}