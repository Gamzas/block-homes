// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateInfo is Ownable {
    
    // 부동산 기본 정보
    struct BasicInfo {
        string roadNameAddress; // 도로명주소
        string buildingName; // 건물명
        uint16 buildingNumber; // 동 번호 (아파트 동)
        uint16 roomNumber; // 호수 번호
    }
    // 건축물 관리대장
    struct BuildingManagementRecord {
        bool isViolated; // 위반건축물 여부
        bool isNotPermitted; // 무허가건축물 여부
        uint16 units; // 호수
        uint16 households; // 가구 수
        string landArea; // 대지면적
        string mainStructure; // 주구조
        string mainUsage; // 주용도
        string height; // 높이
        string floor; // 지붕
    }

    BasicInfo basicInfo;
    BuildingManagementRecord buildingManagementRecord;

    constructor(
        string memory _roadNameAddress,
        string memory _buildingName,
        uint16  _buildingNumber,
        uint16 _roomNumber,
        bool  _isViolated,
        bool  _isNotPermitted,
        uint16  _units,
        uint16  _households,
        string memory _landArea,
        string memory _mainStructure,
        string memory _mainUsage,
        string memory _height,
        string memory _floor
    ) Ownable(msg.sender) {
        basicInfo.roadNameAddress = _roadNameAddress;
        basicInfo.buildingName = _buildingName;
        basicInfo.buildingNumber = _buildingNumber;
        basicInfo.roomNumber = _roomNumber;
        buildingManagementRecord.isViolated=_isViolated;
        buildingManagementRecord.isNotPermitted=_isNotPermitted;
        buildingManagementRecord.units=_units;
        buildingManagementRecord.households=_households;
        buildingManagementRecord.landArea=_landArea;
        buildingManagementRecord.mainStructure=_mainStructure;
        buildingManagementRecord.mainUsage=_mainUsage;
        buildingManagementRecord.height=_height;
        buildingManagementRecord.floor=_floor;
    }

    function getRealEstateInfo() external view returns (
        BasicInfo memory,
        BuildingManagementRecord memory) {
            return (basicInfo, buildingManagementRecord);
    }


}