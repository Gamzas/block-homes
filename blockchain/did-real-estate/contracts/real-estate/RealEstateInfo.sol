// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../structs/RealEstateStructs.sol";

contract RealEstateInfo is Ownable {

    RealEstateStructs.RealEstateBasicInfo basicInfo;
    RealEstateStructs.RealEstateRegistryCertificate registryCertificate;
    RealEstateStructs.BuildingManagementRecord buildingManagementRecord;

    constructor() Ownable(msg.sender) {}

    function setRealEstateBasicInfo(RealEstateStructs.RealEstateBasicInfo calldata _basicInfo) external onlyOwner {
        basicInfo = RealEstateStructs.RealEstateBasicInfo({
            roadNameAddress: _basicInfo.roadNameAddress,
            buildingName: _basicInfo.buildingName,
            buildingNumber: _basicInfo.buildingNumber,
            roomNumber: _basicInfo.roomNumber,
            genDate: _basicInfo.genDate
        });
    }

    function setHeadLine(RealEstateStructs.HeadLine calldata _headline) external onlyOwner {
        registryCertificate.headline = RealEstateStructs.HeadLine({
            num: _headline.num,
            registration: _headline.registration,
            location: _headline.location,
            buildingInfo: _headline.buildingInfo,
            reasonAndEtc: _headline.reasonAndEtc
        });
    }

    function setRightsSection(RealEstateStructs.Section calldata _rightsSection) external onlyOwner {
        registryCertificate.rightsSection = RealEstateStructs.Section({
            rank: _rightsSection.rank,
            purpose: _rightsSection.purpose,
            registration: _rightsSection.registration,
            reason: _rightsSection.reason,
            holderAndEtc: _rightsSection.holderAndEtc
        });
    }

    function setEncumbrancesSection(RealEstateStructs.Section calldata _encumbrancesSection) external onlyOwner {
        registryCertificate.rightsSection = RealEstateStructs.Section({
            rank: _encumbrancesSection.rank,
            purpose: _encumbrancesSection.purpose,
            registration: _encumbrancesSection.registration,
            reason: _encumbrancesSection.reason,
            holderAndEtc: _encumbrancesSection.holderAndEtc
        });
    }

    function setBuildingManagementRecord(RealEstateStructs.BuildingManagementRecord calldata _buildingManagementRecord) external onlyOwner {
        buildingManagementRecord.isViolated = _buildingManagementRecord.isViolated;
        buildingManagementRecord.units = _buildingManagementRecord.units;
        buildingManagementRecord.households = _buildingManagementRecord.households;
        buildingManagementRecord.dwellingUnits = _buildingManagementRecord.dwellingUnits;
        buildingManagementRecord.landLocation = _buildingManagementRecord.landLocation;
        buildingManagementRecord.landNumber = _buildingManagementRecord.landNumber;
        buildingManagementRecord.landArea = _buildingManagementRecord.landArea;
        buildingManagementRecord.totalFloorArea = _buildingManagementRecord.totalFloorArea;
        buildingManagementRecord.region = _buildingManagementRecord.region;
        buildingManagementRecord.buildingArea = _buildingManagementRecord.buildingArea;
        buildingManagementRecord.mainStructure = _buildingManagementRecord.mainStructure;
        buildingManagementRecord.mainUsage = _buildingManagementRecord.mainUsage;
        buildingManagementRecord.basementFloorCount = _buildingManagementRecord.basementFloorCount;
        buildingManagementRecord.aboveGroundFloorCount = _buildingManagementRecord.aboveGroundFloorCount;
        buildingManagementRecord.height = _buildingManagementRecord.height;
        buildingManagementRecord.floor = _buildingManagementRecord.floor;

        // Clear the existing statuses array
        delete buildingManagementRecord.statuses;
        
        // Copy each status from calldata to storage
        for (uint i = 0; i < _buildingManagementRecord.statuses.length; i++) {
            buildingManagementRecord.statuses.push(_buildingManagementRecord.statuses[i]);
        }
    }


    function addStatus(RealEstateStructs.StructureStatus calldata _status) external onlyOwner {
        buildingManagementRecord.statuses.push(RealEstateStructs.StructureStatus({
            category: _status.category,
            floorNumber: _status.floorNumber,
            structure: _status.structure,
            usage: _status.usage,
            area: _status.area
        }));
    }

    function getRealEstateFullInfo() external view returns (
        RealEstateStructs.RealEstateBasicInfo memory, 
        RealEstateStructs.RealEstateRegistryCertificate memory, 
        RealEstateStructs.BuildingManagementRecord memory) {
        return (basicInfo, registryCertificate, buildingManagementRecord);
    }

    function getBasicInfo() external view returns (RealEstateStructs.RealEstateBasicInfo memory) {
        return basicInfo;
    }

    function getRegistryCertificate() external view returns (RealEstateStructs.RealEstateRegistryCertificate memory) {
        return registryCertificate;
    }

    function getBuildingManagementRecord() external view returns (RealEstateStructs.BuildingManagementRecord memory) {
        return buildingManagementRecord;
    }

}