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

    function createDIDDocument(DIDStructs.DIDDocument memory _didDocument) external onlyOwner {
        address identifier = address(new RealEstateInfo(msg.sender));
        DIDStructs.DIDDocument memory didDocument;
        didDocument.id = string(abi.encodePacked("did:klay:", HexUtils.toHexString(uint256(uint160(identifier)), 20)));
        didDocument.context = _didDocument.context;

        didDocument.publicKey.id = string(abi.encodePacked(didDocument.id, _didDocument.publicKey.id)); // DID + fragment 수행
        didDocument.publicKey.keyType = _didDocument.publicKey.keyType;
        didDocument.publicKey.controller = _didDocument.publicKey.controller;
        didDocument.publicKey.publicKeyData = _didDocument.publicKey.publicKeyData;

        didDocument.authentication = _didDocument.authentication;

        didDocument.service.id = _didDocument.service.id;
        didDocument.service.serviceType = _didDocument.service.serviceType;
        didDocument.service.serviceEndPoint = _didDocument.service.serviceEndPoint;

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
