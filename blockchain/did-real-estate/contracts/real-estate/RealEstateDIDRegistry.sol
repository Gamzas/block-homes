// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/DIDStructs.sol";
import "./RealEstateInfo.sol";
import "../utils/HexUtils.sol";

contract RealEstateDIDRegistry is Ownable {

    mapping(string => DIDStructs.DIDDocument) didDocuments;

    constructor() Ownable(msg.sender) {}

    event DIDCreated(string did);
    event DIDDeleted(string did);

    function createDIDDocument(bytes calldata _publicKey) external onlyOwner {
        address identifier = address(new RealEstateInfo(msg.sender));
        DIDStructs.DIDDocument memory didDocument;
        didDocument.id = string(abi.encodePacked("did:klay:", HexUtils.toHexString(uint256(uint160(identifier)), 20)));
        didDocument.context = "https://www.w3.org/ns/did/v1";

        didDocument.publicKey.id = "did:klay:0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4#keys-1";
        didDocument.publicKey.keyType = "EcdsaSecp256k1VerificationKey2019";
        didDocument.publicKey.controller = "did:klay:0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4";
        didDocument.publicKey.publicKeyData = _publicKey;

        didDocument.authentication = didDocument.publicKey.id;

        didDocuments[didDocument.id] = didDocument;

        emit DIDCreated(didDocument.id);
    }

    function getDIDDocument(string calldata did) external view returns (DIDStructs.DIDDocument memory) {
        return didDocuments[did];
    }

    function deleteDIDDocument(string calldata did) external onlyOwner {
        delete didDocuments[did];
        emit DIDDeleted(did);
    }

}
