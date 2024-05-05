// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/DIDStructs.sol";
import "./RealEstateInfo.sol";

contract RealEstateDIDRegistry is Ownable {

    mapping(string => DIDStructs.DIDDocument) didDocuments;

    constructor() Ownable(msg.sender) {}

    event DIDCreated(string did);
    event DIDDeleted(string did);

    function createDIDDocument(DIDStructs.DIDDocument memory _didDocument) external onlyOwner {
        address identifier = address(new RealEstateInfo(msg.sender));
        
        // DID Document 생성
        DIDStructs.DIDDocument memory didDocument;

        // DID 고유 값 생성
        didDocument.id = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(identifier)), 20)));
        
        // context 대입
        didDocument.context = _didDocument.context;

        // publicKey 대입
        didDocument.publicKey.id = string(abi.encodePacked(didDocument.id, _didDocument.publicKey.id)); // DID + fragment 수행
        didDocument.publicKey.keyType = _didDocument.publicKey.keyType;
        didDocument.publicKey.controller = _didDocument.publicKey.controller;
        didDocument.publicKey.publicKeyData = _didDocument.publicKey.publicKeyData;

        // authentication 대입
        didDocument.authentication = _didDocument.authentication;

        // service 대입
        didDocument.service.id = _didDocument.service.id;
        didDocument.service.serviceType = _didDocument.service.serviceType;
        didDocument.service.serviceEndPoint = _didDocument.service.serviceEndPoint;

        // DID Document를 mapping에 기록
        didDocuments[didDocument.id] = didDocument;

        emit DIDCreated(did);
    }

    function getDIDDocument(string memory did) external returns (DIDStructs.DIDDocument) {
        require(bytes(didDocuments[did].id).length > 0, "DID Document does not exist");
        return didDocuments[did];
    }

    function deleteDIDDocument(string memory did) external onlyOwner {
        require(bytes(didDocuments[did].id).length > 0, "DID Document does not exist");
        delete didDocuments[did];

        emit DIDDeleted(did);
    }

    function toHexString(uint256 value, uint length) internal pure returns (string memory) {
        bytes memory buffer = new bytes(2 * length + 2);
        buffer[0] = '0';
        buffer[1] = 'x';
        for (uint i = 2 * length + 1; i > 1; --i) {
            buffer[i] = bytes1(uint8(value & 0xf) + (value & 0xf < 10 ? 48 : 87));
            value >>= 4;
        }
        return string(buffer);
    }

}
