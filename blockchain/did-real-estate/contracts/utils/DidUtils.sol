// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BytesUtils.sol";

library DidUtils {
    // example: did:klay:5Ee76017be7F983a520a778B413758A9DB49cBe9
    /**
     * @dev verify did format
     * @param did did
     */
    function verifyDIDFormat(string memory did) public pure returns (bool) {
        bytes memory didData = bytes(did);
        if (didData.length != 49) {
            return false;
        }
        bytes memory prefix = bytes("did:klay:");
        if (
            !BytesUtils.equal(
                BytesUtils.slice(didData, 0, prefix.length),
                prefix
            )
        ) {
            return false;
        }
        bytes memory addressBytesData = BytesUtils.slice(
            didData,
            prefix.length,
            didData.length - prefix.length
        );
        bytes memory addressBytes = BytesUtils.fromHex(
            string(addressBytesData)
        );
        return addressBytes.length == 20;
    }

    function parseAddrFromDID(bytes memory did) public pure returns (address) {
        uint256 prefixLen = 9;
        bytes memory addressBytesData = BytesUtils.slice(
            did,
            prefixLen,
            did.length - prefixLen
        );
        bytes memory addressBytes = BytesUtils.fromHex(
            string(addressBytesData)
        );
        return BytesUtils.bytesToAddress(addressBytes);
    }

    function parseAddrFromDID2(bytes memory did)
        public
        pure
        returns (bytes memory)
    {
        uint256 prefixLen = 9;
        bytes memory addressBytesData = BytesUtils.slice(
            did,
            prefixLen,
            did.length - prefixLen
        );
        return addressBytesData;
    }

    /**
     * @dev parse public key to address
     * @param pubKey public key
     */
    function pubKeyToAddr(bytes memory pubKey) public pure returns (address) {
        return address(uint160(uint256(keccak256(pubKey))));
    }

    function byteFromDid(string memory did) public pure returns (bytes memory) {
        bytes memory res = bytes(did);
        return res;
    }
}