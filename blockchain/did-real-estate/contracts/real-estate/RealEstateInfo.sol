// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/RealEstateStructs.sol";

contract RealEstateInfo is Ownable {

    RealEstateStructs.BasicInfo basicInfo;
    RealEstateStructs.RealEstateRegistryCertificate registryCertificate;
    RealEstateStructs.BuildingManagementRecord buildingManagementRecord;


    constructor(address _owner) Ownable(_owner) {}

    function setBasicInfo(
        string memory _roadNameAddress,
        string memory _buildingName,
        uint16 _buildingNumber,
        uint16 _roomNumber
    ) external onlyOwner {
        basicInfo = RealEstateStructs.BasicInfo({
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
        registryCertificate.rightsSection = RealEstateStructs.Section({
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
        registryCertificate.encumbrancesSection = RealEstateStructs.Section({
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
        buildingManagementRecord = RealEstateStructs.BuildingManagementRecord({
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
        RealEstateStructs.BasicInfo memory, 
        RealEstateStructs.RealEstateRegistryCertificate memory, 
        RealEstateStructs.BuildingManagementRecord memory) {
            return (basicInfo, registryCertificate, buildingManagementRecord);
    }



}