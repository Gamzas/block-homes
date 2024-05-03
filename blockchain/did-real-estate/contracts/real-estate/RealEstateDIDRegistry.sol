// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/DIDStructs.sol";

contract RealEstateDIDRegistry is Ownable {

    constructor() Ownable(msg.sender) {}

    mapping(string => DIDStructs.DIDDocument) realEstateDIDDocuments;

    event DIDCreated(string did);

    function registerDIDDocument(
        
    ) public {

    }

}
