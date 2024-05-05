// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library HexUtils {

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

}