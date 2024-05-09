// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


library LongTermRentStruct {

    struct ContractInfo {
        string landlordDID; // 임대인의 분산식 식별자
        string tenantDID; // 임차인의 분산식 식별자
        uint16 leasePeriod; // 임대 기간 (월 단위)
        uint256 deposit; // 전세금
        string propertyDID; // 부동산의 분산식 식별자
        uint256 contractDate; // 계약 날짜 (timestamp)
        string[] terms; // 계약의 세부 조건들
    }

    struct LongTermRentContract {
        ContractInfo contractInfo;
        bytes32 contractInfoHash;

        bytes landlordSignature; // 임대인의 서명
        bytes tenantSignature; // 임차인의 서명
    }
    
}