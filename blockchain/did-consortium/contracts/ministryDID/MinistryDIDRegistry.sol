// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/DIDStruct.sol";
import "../utils/HexUtils.sol";

contract MinistryDIDRegistry is Ownable {

    mapping(string => DIDStruct.DIDDocument) didDocuments;

    constructor() Ownable(msg.sender) {}

    event DIDCreated(string did);
    event DIDDeleted(string did);

    function createDIDDocument(string calldata _publicKey) external onlyOwner {
        DIDStruct.DIDDocument memory didDocument;
       
        didDocument.context = "https://www.w3.org/ns/did/v1";
        didDocument.id = string(abi.encodePacked("did:klay:", HexUtils.toHexString(uint256(uint160(msg.sender)), 20)));
        didDocument.publicKey.id = string(abi.encodePacked(didDocument.id,"#keys-1"));
        didDocument.publicKey.keyType = "EcdsaSecp256k1VerificationKey2019";
        didDocument.publicKey.controller = didDocument.id;
        didDocument.publicKey.publicKeyHex = _publicKey;
        didDocument.authentication=didDocument.publicKey.id;

        didDocuments[didDocument.id] = didDocument;

        emit DIDCreated(didDocument.id);
    }

    function getDIDDocument(string calldata did) external view returns (DIDStruct.DIDDocument memory) {
        return didDocuments[did];
    }

    function deleteDIDDocument(string calldata did) external onlyOwner {
        delete didDocuments[did];
        emit DIDDeleted(did);
    }

}
