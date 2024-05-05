// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library RealEstateStructs {

    // 등기부등본 표제부
    struct HeadLine {
        uint32 num;
        string registration;
        string location;
        string buildingInfo;
        string reasonAndEtc;
    }

    // 등기부등본 갑구, 을구
    struct Section {
        uint8 rank; // 순위번호
        string purpose; // 등기목적
        string registration; // 접수
        string reason; // 등기원인
        string holderAndEtc; // 권리자 및 기타사항
    }

    // 건축물관리대장 층별 건축물 현황
    struct StructureStatus {
        string category; // 구분
        uint8 floorNumber; // 층별
        string structure; // 구조
        string usage; // 용도
        string area; // 면적
    }

    // 부동산 기본 정보
    struct RealEstateBasicInfo {
        string roadNameAddress; // 도로명주소
        string buildingName; // 건물명
        uint16 buildingNumber; // 동 번호 (아파트 동)
        uint16 roomNumber; // 호수 번호
        string genDate; // 생성 일자
    }

    // 등기부등본
    struct RealEstateRegistryCertificate {
        HeadLine headline; // 표제부
        Section rightsSection; // 갑구 (소유권 변동 및 관련 권리)
        Section encumbrancesSection; // 을구 (저당권, 지상권, 전세권 등의 권리사항)
    }

    // 건축물 관리대장
    struct BuildingManagementRecord {
        bool isViolated; // 위반건축물 여부

        uint16 units; // 호수
        uint16 households; // 가구 수
        uint16 dwellingUnits; // 세대 수

        string landLocation; // 대지위치
        uint16 landNumber; // 지번
        string landArea; // 대지면적
        string totalFloorArea; // 연면적
        string region; // 지역
        string buildingArea; // 건축면적
        string mainStructure; // 주구조
        string mainUsage; // 주용도
        uint8 basementFloorCount; // 지하 층수
        uint8 aboveGroundFloorCount; // 지상층수
        
        string height; // 높이
        string floor; // 지붕

        StructureStatus[] statuses; // 건축물 현황 배열
    }

}