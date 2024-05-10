// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/DIDStruct.sol";
import "../utils/HexUtils.sol";
import "../tax/TaxPayment.sol";

contract UserDIDRegistry is Ownable {

    mapping(string => DIDStruct.DIDDocument) didDocuments;

    mapping(string => address) taxAddresses;
    mapping(string => address) loanAddresses;

    constructor() Ownable(msg.sender) {}

    event DIDCreated(string did);
    event DIDDeleted(string did);

    function createDIDDocument() external onlyOwner {
        DIDStruct.DIDDocument memory didDocument;
        didDocument.id = string(abi.encodePacked("did:klay:", HexUtils.toHexString(uint256(uint160(msg.sender)), 20)));
        didDocument.context = "https://www.w3.org/ns/did/v1";

        address taxAddress = address(new TaxPayment(msg.sender));
        taxAddresses[didDocument.id] = taxAddress;

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
    
    function getTaxContractAddress(string calldata did) external view returns (address) {
        return taxAddresses[did];
    }

}
