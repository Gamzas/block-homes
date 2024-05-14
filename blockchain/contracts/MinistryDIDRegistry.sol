// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MinistryDIDRegistry is Ownable {

    struct PublicKey {
        string id;
        string keyType;
        string controller;
        string publicKeyHex;
    }

    struct DIDDocument {
        string context;
        string id;
        PublicKey publicKey;
        string authentication;
    }

    mapping(string => DIDDocument) didDocuments;

    constructor() Ownable(msg.sender) {}

    event DIDCreated(string did);
    event DIDDeleted(string did);

    function toHexString(uint256 value, uint length) public pure returns (string memory) {
        bytes memory buffer = new bytes(2 * length + 2);
        buffer[0] = '0';
        buffer[1] = 'x';
        for (uint i = 2 * length + 1; i > 1; --i) {
            buffer[i] = bytes1(uint8(value & 0xf) + (value & 0xf < 10 ? 48 : 87));
            value >>= 4;
        }
        return string(buffer);
    }

    function createDIDDocument(string calldata _publicKey) public {
        DIDDocument memory didDocument;
       
        didDocument.context = "https://www.w3.org/ns/did/v1";
        didDocument.id = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(msg.sender)), 20)));
        didDocument.publicKey.id = string(abi.encodePacked(didDocument.id,"#keys-1"));
        didDocument.publicKey.keyType = "EcdsaSecp256k1VerificationKey2019";
        didDocument.publicKey.controller = didDocument.id;
        didDocument.publicKey.publicKeyHex = _publicKey;
        didDocument.authentication=didDocument.publicKey.id;

        didDocuments[didDocument.id] = didDocument;

        emit DIDCreated(didDocument.id);
    }

    function getDIDDocument(string calldata did) external view returns (DIDDocument memory) {
        return didDocuments[did];
    }

    function deleteDIDDocument(string calldata did) external onlyOwner {
        delete didDocuments[did];
        emit DIDDeleted(did);
    }

}
