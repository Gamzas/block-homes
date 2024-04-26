// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "../utils/IterableMapping.sol";

/**
 * @title MixinDidStorage
 * @dev This contract is did storage implementation
 */
contract MixinDidStorage {
    using IterableMapping for IterableMapping.itmap;
    mapping(string => IterableMapping.itmap) public data; // data storage

    struct DIDStatus {
        bool deactivated;
        uint256 authListLen;
    }

    mapping(string => DIDStatus) public didStatus;
}