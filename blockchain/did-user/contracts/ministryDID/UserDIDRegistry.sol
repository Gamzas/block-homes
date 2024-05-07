// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/DIDStructs.sol";
import "../utils/HexUtils.sol";
import "../tax/TaxPayment.sol";

contract MinistryDIDRegistry is Ownable {

    mapping(string => DIDStructs.DIDDocument) didDocuments;

    mapping(string => address) taxAddresses;

    constructor() Ownable(msg.sender) {}

    event DIDCreated(string did);
    event DIDDeleted(string did);

    function createDIDDocument(DIDStructs.DIDDocument memory _didDocument) external onlyOwner {
        // DIDStructs.DIDDocument memory didDocument;

        string memory did = string(abi.encodePacked("did:klay:", HexUtils.toHexString(uint256(uint160(msg.sender)), 20)));
        DIDStructs.DIDDocument storage didDocument = didDocuments[did];
        
        didDocument.context = _didDocument.context;

        address taxAddress = address(new TaxPayment(msg.sender));
        taxAddresses[didDocument.id] = taxAddress;

        for (uint i = 0; i < _didDocument.publicKey.length; i++) {
            didDocument.publicKey.push(DIDStructs.PublicKey({
                id: string(abi.encodePacked(didDocument.id, _didDocument.publicKey[i].id)),
                keyType: _didDocument.publicKey[i].keyType,
                controller: _didDocument.publicKey[i].controller,
                publicKeyData: _didDocument.publicKey[i].publicKeyData
            }));

            // 처음에는 모든 key가 auth로 등록
            didDocument.authentication.push(_didDocument.authentication[i]);
        }

        for (uint i = 0; i < _didDocument.service.length; i++) {
            didDocument.service.push(DIDStructs.Service({
                id: _didDocument.service[i].id,
                serviceType: _didDocument.service[i].serviceType,
                serviceEndPoint: _didDocument.service[i].serviceEndPoint
            }));
        }

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
    
    function getTaxContractAddress(string calldata did) external view returns (address) {
        return taxAddresses[did];
    }

}
