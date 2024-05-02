// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../structs/DIDStructs.sol";

contract RealEstateDIDRegistry {

    mapping(string => address) private didDocumentAddress;

    event RealEstateDIDDocumentCreated(string did, string id);

    

}
