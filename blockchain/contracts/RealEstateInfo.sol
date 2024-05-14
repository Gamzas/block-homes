// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateInfo is Ownable {

    struct Section {
        uint8 rank; // 순위번호
        string purpose; // 등기목적
        string registration; // 접수
        string reason; // 등기원인
        string holderAndEtc; // 권리자 및 기타사항
    }
    
    // 부동산 기본 정보
    struct BasicInfo {
        string roadNameAddress; // 도로명주소
        string buildingName; // 건물명
        uint16 buildingNumber; // 동 번호 (아파트 동)
        uint16 roomNumber; // 호수 번호
    }

    // 등기부등본
    struct RealEstateRegistryCertificate {
        Section rightsSection; // 갑구 (소유권 변동 및 관련 권리)
        Section encumbrancesSection; // 을구 (저당권, 지상권, 전세권 등의 권리사항)
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
    RealEstateRegistryCertificate registryCertificate;
    BuildingManagementRecord buildingManagementRecord;


    constructor(address _owner) Ownable(_owner) {}

    function setBasicInfo(
        string memory _roadNameAddress,
        string memory _buildingName,
        uint16 _buildingNumber,
        uint16 _roomNumber
    ) external onlyOwner {
        basicInfo = BasicInfo({
            roadNameAddress: _roadNameAddress,
            buildingName: _buildingName,
            buildingNumber: _buildingNumber,
            roomNumber: _roomNumber
        });
    }

    function setRightsSection(
        uint8 _rank,
        string memory _purpose,
        string memory _registration,
        string memory _reason,
        string memory _holderAndEtc
    ) external onlyOwner {
        registryCertificate.rightsSection = Section({
            rank: _rank,
            purpose: _purpose,
            registration: _registration,
            reason: _reason,
            holderAndEtc: _holderAndEtc
        });
    }

    function setEncumbrancesSection(
        uint8 _rank,
        string memory _purpose,
        string memory _registration,
        string memory _reason,
        string memory _holderAndEtc
    ) external onlyOwner {
        registryCertificate.encumbrancesSection = Section({
            rank: _rank,
            purpose: _purpose,
            registration: _registration,
            reason: _reason,
            holderAndEtc: _holderAndEtc
        });
    }

    function setBuildingManagementRecord(
        bool _isViolated,
        bool _isNotPermitted,
        uint16 _units,
        uint16 _households,
        string memory _landArea,
        string memory _mainStructure,
        string memory _mainUsage,
        string memory _height,
        string memory _floor
    ) external onlyOwner {
        buildingManagementRecord = BuildingManagementRecord({
            isViolated: _isViolated,
            isNotPermitted: _isNotPermitted,
            units: _units,
            households: _households,
            landArea: _landArea,
            mainStructure: _mainStructure,
            mainUsage: _mainUsage,
            height: _height,
            floor: _floor
        });
    }

    function getRealEstateInfo() external view returns (
        BasicInfo memory, 
        RealEstateRegistryCertificate memory, 
        BuildingManagementRecord memory) {
            return (basicInfo, registryCertificate, buildingManagementRecord);
    }


}