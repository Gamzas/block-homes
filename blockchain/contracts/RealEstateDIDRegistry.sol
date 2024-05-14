// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./RealEstateInfo.sol";

contract RealEstateDIDRegistry is Ownable {

        struct PublicKey {
        string id;
        string keyType;
        string controller;
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

    function createDIDDocument() external onlyOwner {
        address identifier = address(new RealEstateInfo(msg.sender));
        DIDDocument memory didDocument;
        didDocument.id = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(identifier)), 20)));
        didDocument.context = "https://www.w3.org/ns/did/v1";

        didDocument.publicKey.id = "did:klay:0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4#keys-1";
        didDocument.publicKey.keyType = "EcdsaSecp256k1VerificationKey2019";
        didDocument.publicKey.controller = "did:klay:0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4";

        didDocument.authentication = didDocument.publicKey.id;

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
