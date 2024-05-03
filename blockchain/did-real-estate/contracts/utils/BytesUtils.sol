// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

library BytesUtils {

    /**
     *  0x... 형식의 hexString을 주소 값으로 변환하는 함수
     */ 
    function hexStringToAddress(string memory str)
        public
        pure
        returns (bytes memory)
    {
        bytes memory res = bytes(str);
        require(res.length % 2 == 0); // length must be even
        bytes memory r = new bytes(res.length / 2);
        for (uint256 i = 0; i < res.length / 2; ++i) {
            r[i] = bytes1(
                fromHexChar(uint8(res[2 * i])) *
                    16 +
                    fromHexChar(uint8(res[2 * i + 1]))
            );
        }

        return r;
    }

    /**
     * DID 뒤의 식별자 (Identifier)를 잘라, 주소값으로 변환 후 return
     */
    function getSigner(string memory did)
        public
        pure
        returns (bytes memory)
    {
        string memory cid = substring(did, 9, 49);
        return hexStringToAddress(cid);
    }

    /**
     * string을 자르는 함수
     */
    function substring(
        string memory str,
        uint256 startIndex,
        uint256 endIndex
    ) public pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex - startIndex);
        for (uint256 i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = strBytes[i];
        }
        return string(result);
    }

    /**
     * string을 bytes로 바꾸는 함수
     */
    function stringToBytes(string memory str)
        public
        pure
        returns (bytes memory)
    {
        return bytes(str);
    }

    /** 
     *  @notice      Convert bytes to address
     *  @param _bs   Source bytes: bytes length must be 20
     *  @return addr Converted address from source bytes
     */
    function bytesToAddress(bytes memory _bs)
        public
        pure
        returns (address addr)
    {
        require(_bs.length == 20, "bytes length does not match address (20)");
        assembly {
            // for _bs, first word store _bs.length, second word store _bs.value
            // load 32 bytes from mem[_bs+20], convert it into Uint160, meaning we take last 20 bytes as addr (address).
            addr := mload(add(_bs, 0x14))
        }
    }

    /** 
     *  @notice      Convert address to bytes
     *  @param _addr Address need to be converted
     *  @return bs   Converted bytes from address
     */
    function addressToBytes(address _addr)
        public
        pure
        returns (bytes memory bs)
    {
        assembly {
            // Get a location of some free memory and store it in result as
            // Solidity does for memory variables.
            bs := mload(0x40)
            // Put 20 (address byte length) at the first word, the length of bytes for uint256 value
            mstore(bs, 0x14)
            // logical shift left _a by 12 bytes, change _a from right-aligned to left-aligned
            mstore(add(bs, 0x20), shl(96, _addr))
            // Update the free-memory pointer by padding our last write location to 32 bytes
            mstore(0x40, add(bs, 0x40))
        }
    }

    /* @notice              Compare if two bytes are equal, which are in storage and memory, seperately
                            Refer from https://github.com/summa-tx/bitcoin-spv/blob/master/solidity/contracts/BytesLib.sol#L368
    *  @param _preBytes     The bytes stored in storage
    *  @param _postBytes    The bytes stored in memory
    *  @return              Bool type indicating if they are equal
    */
    function equalStorage(bytes storage _preBytes, bytes memory _postBytes)
        internal
        view
        returns (bool)
    {
        // Load the length of the storage array
        uint256 slength = _preBytes.length;
        // Load the length of the memory array
        uint256 mlength = _postBytes.length;

        // If lengths don't match, the arrays are not equal
        if (slength != mlength) {
            return false;
        }

        // Compute the keccak hash of the storage location of _preBytes
        uint256 sc = uint256(keccak256(abi.encodePacked(_preBytes)));

        bool success = true;

        assembly {
            // Start position of the _postBytes data
            let mc := add(_postBytes, 0x20)
            // End position of the _postBytes data
            let end := add(mc, mlength)

            // Loop over each element in the storage and memory arrays
            for { } lt(mc, end) { } {
                mc := add(mc, 0x20)  // Move to the next 32-byte block in memory
                sc := add(sc, 1)     // Move to the next slot in storage

                // Load the current element from storage and memory
                let sElement := sload(sc)
                let mElement := mload(mc)

                // Check if the elements are not equal
                if iszero(eq(sElement, mElement)) {
                    success := 0  // Set success to false
                    break         // Exit the loop
                }
            }
        }

        return success;
    }

    // function equalStorage(bytes storage _preBytes, bytes memory _postBytes)
    //     internal
    //     view
    //     returns (bool)
    // {
    //     bool success = true;

    //     assembly {
    //         // we know _preBytes_offset is 0
    //         let fslot := sload(_preBytes_slot)
    //         // Arrays of 31 bytes or less have an even value in their slot,
    //         // while longer arrays have an odd value. The actual length is
    //         // the slot divided by two for odd values, and the lowest order
    //         // byte divided by two for even values.
    //         // If the slot is even, bitwise and the slot with 255 and divide by
    //         // two to get the length. If the slot is odd, bitwise and the slot
    //         // with -1 and divide by two.
    //         let slength := div(
    //             and(fslot, sub(mul(0x100, iszero(and(fslot, 1))), 1)),
    //             2
    //         )
    //         let mlength := mload(_postBytes)

    //         // if lengths don't match the arrays are not equal
    //         switch eq(slength, mlength)
    //         case 1 {
    //             // fslot can contain both the length and contents of the array
    //             // if slength < 32 bytes so let's prepare for that
    //             // v. http://solidity.readthedocs.io/en/latest/miscellaneous.html#layout-of-state-variables-in-storage
    //             // slength != 0
    //             if iszero(iszero(slength)) {
    //                 switch lt(slength, 32)
    //                 case 1 {
    //                     // blank the last byte which is the length
    //                     fslot := mul(div(fslot, 0x100), 0x100)

    //                     if iszero(eq(fslot, mload(add(_postBytes, 0x20)))) {
    //                         // unsuccess:
    //                         success := 0
    //                     }
    //                 }
    //                 default {
    //                     // cb is a circuit breaker in the for loop since there's
    //                     //  no said feature for inline assembly loops
    //                     // cb = 1 - don't breaker
    //                     // cb = 0 - break
    //                     let cb := 1

    //                     // get the keccak hash to get the contents of the array
    //                     mstore(0x0, _preBytes_slot)
    //                     let sc := keccak256(0x0, 0x20)

    //                     let mc := add(_postBytes, 0x20)
    //                     let end := add(mc, mlength)

    //                     // the next line is the loop condition:
    //                     // while(uint(mc < end) + cb == 2)
    //                     for {

    //                     } eq(add(lt(mc, end), cb), 2) {
    //                         sc := add(sc, 1)
    //                         mc := add(mc, 0x20)
    //                     } {
    //                         if iszero(eq(sload(sc), mload(mc))) {
    //                             // unsuccess:
    //                             success := 0
    //                             cb := 0
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         default {
    //             // unsuccess:
    //             success := 0
    //         }
    //     }

    //     return success;
    // }


    function equal(bytes memory _preBytes, bytes memory _postBytes)
        internal
        pure
        returns (bool)
    {
        bool success = true;

        assembly {
            let length := mload(_preBytes)

            // if lengths don't match the arrays are not equal
            switch eq(length, mload(_postBytes))
            case 1 {
                // cb is a circuit breaker in the for loop since there's
                //  no said feature for inline assembly loops
                // cb = 1 - don't breaker
                // cb = 0 - break
                let cb := 1

                let mc := add(_preBytes, 0x20)
                let end := add(mc, length)

                for {
                    let cc := add(_postBytes, 0x20)
                    // the next line is the loop condition:
                    // while(uint256(mc < end) + cb == 2)
                } eq(add(lt(mc, end), cb), 2) {
                    mc := add(mc, 0x20)
                    cc := add(cc, 0x20)
                } {
                    // if any of these checks fails then arrays are not equal
                    if iszero(eq(mload(mc), mload(cc))) {
                        // unsuccess:
                        success := 0
                        cb := 0
                    }
                }
            }
            default {
                // unsuccess:
                success := 0
            }
        }

        return success;
    }

    /* @notice              Slice the _bytes from _start index till the result has length of _length
                            Refer from https://github.com/summa-tx/bitcoin-spv/blob/master/solidity/contracts/BytesLib.sol#L246
    *  @param _bytes        The original bytes needs to be sliced
    *  @param _start        The index of _bytes for the start of sliced bytes
    *  @param _length       The index of _bytes for the end of sliced bytes
    *  @return              The sliced bytes
    */
    function slice(
        bytes memory _bytes,
        uint256 _start,
        uint256 _length
    ) internal pure returns (bytes memory) {
        require(_bytes.length >= (_start + _length));

        bytes memory tempBytes;

        assembly {
            switch iszero(_length)
            case 0 {
                // Get a location of some free memory and store it in tempBytes as
                // Solidity does for memory variables.
                tempBytes := mload(0x40)

                // The first word of the slice result is potentially a partial
                // word read from the original array. To read it, we calculate
                // the length of that partial word and start copying that many
                // bytes into the array. The first word we copy will start with
                // data we don't care about, but the last `lengthmod` bytes will
                // land at the beginning of the contents of the new array. When
                // we're done copying, we overwrite the full first word with
                // the actual length of the slice.
                // lengthmod <= _length % 32
                let lengthmod := and(_length, 31)

                // The multiplication in the next line is necessary
                // because when slicing multiples of 32 bytes (lengthmod == 0)
                // the following copy loop was copying the origin's length
                // and then ending prematurely not copying everything it should.
                let mc := add(
                    add(tempBytes, lengthmod),
                    mul(0x20, iszero(lengthmod))
                )
                let end := add(mc, _length)

                for {
                    // The multiplication in the next line has the same exact purpose
                    // as the one above.
                    let cc := add(
                        add(
                            add(_bytes, lengthmod),
                            mul(0x20, iszero(lengthmod))
                        ),
                        _start
                    )
                } lt(mc, end) {
                    mc := add(mc, 0x20)
                    cc := add(cc, 0x20)
                } {
                    mstore(mc, mload(cc))
                }

                mstore(tempBytes, _length)

                //update free-memory pointer
                //allocating the array padded to 32 bytes like the compiler does now
                mstore(0x40, and(add(mc, 31), not(31)))
            }
            //if we want a zero-length slice let's just return a zero-length array
            default {
                tempBytes := mload(0x40)

                mstore(0x40, add(tempBytes, 0x20))
            }
        }

        return tempBytes;
    }

    /**
     * @dev Returns true if `account` is a contract.
     *      Refer from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol#L18
     *
     * This test is non-exhaustive, and there may be false-negatives: during the
     * execution of a contract's constructor, its address will be reported as
     * not containing a contract.
     *
     * IMPORTANT: It is unsafe to assume that an address for which this
     * function returns false is an externally-owned account (EOA) and not a
     * contract.
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies in extcodesize, which returns 0 for contracts in
        // construction, since the code is only stored at the end of the
        // constructor execution.

        // According to EIP-1052, 0x0 is the value returned for not-yet created accounts
        // and 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 is returned
        // for accounts without code, i.e. `keccak256('')`
        bytes32 codehash;
        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            codehash := extcodehash(account)
        }
        return (codehash != 0x0 && codehash != accountHash);
    }

    /**
     * @dev Convert an hexadecimal character to their value
     * @param c char
     */
    function fromHexChar(uint8 c) public pure returns (uint8) {
        if (bytes1(c) >= bytes1("0") && bytes1(c) <= bytes1("9")) {
            return c - uint8(bytes1("0"));
        }
        if (bytes1(c) >= bytes1("a") && bytes1(c) <= bytes1("f")) {
            return 10 + c - uint8(bytes1("a"));
        }
        if (bytes1(c) >= bytes1("A") && bytes1(c) <= bytes1("F")) {
            return 10 + c - uint8(bytes1("A"));
        }
        revert();
    }

    /**
     * @dev  Convert an hexadecimal string to raw bytes
     * @param s string
     */
    function fromHex(string memory s) public pure returns (bytes memory) {
        bytes memory ss = bytes(s);
        require(ss.length % 2 == 0);
        // length must be even
        bytes memory r = new bytes(ss.length / 2);
        for (uint256 i = 0; i < ss.length / 2; ++i) {
            r[i] = bytes1(
                fromHexChar(uint8(ss[2 * i])) *
                    16 +
                    fromHexChar(uint8(ss[2 * i + 1]))
            );
        }
        return r;
    }

    /**
     * @dev  Convert uint to string
     * @param _i uint
     */
    function uint2str(uint256 _i)
        internal
        pure
        returns (string memory _uintAsString)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + (_i % 10)));
            _i /= 10;
        }
        return string(bstr);
    }

    /**
     * @dev  Convert string to lowercase
     * @param str string
     */
    function toLower(string memory str) public pure returns (string memory) {
        bytes memory bStr = bytes(str);
        bytes memory bLower = new bytes(bStr.length);
        for (uint256 i = 0; i < bStr.length; i++) {
            // Uppercase character...
            uint8 c = uint8(bStr[i]);
            if ((c >= 65) && (c <= 90)) {
                // So we add 32 to make it lowercase
                bLower[i] = bytes1(c + 32);
            } else {
                bLower[i] = bStr[i];
            }
        }
        return string(bLower);
    }
}