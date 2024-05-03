// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDRegistry {
    struct DIDDocument {
        string id;
        string publicKey;
        bool isValid;
        string name;
    }

    mapping(string => DIDDocument) public dids;

    // 이벤트 선언
    event DIDCreated(string id);
    event DIDInvalidated(string id);

    // DID 생성 함수
    function createDID(string memory _id, string memory _publicKey,string memory _name) public {
        require(dids[_id].isValid == false, "DID already exists.");
        dids[_id] = DIDDocument(_id, _publicKey, true,_name);
        emit DIDCreated(_id);
    }

    function getName(string memory _id) public view returns (string memory){
        return dids[_id].name;
    }

    // DID 무효화 함수
    function invalidateDID(string memory _id) public {
        require(dids[_id].isValid == true, "DID does not exist.");
        dids[_id].isValid = false;
        emit DIDInvalidated(_id);
    }

    // DID 검증 함수
    function verifyDID(string memory _id) public view returns (bool) {
        return dids[_id].isValid;
    }
}