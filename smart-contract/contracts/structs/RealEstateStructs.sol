// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library RealEstateStructs {

    struct RealEstateInfo {
        


        string buildingID;
        string buildingName;
        string roadNameAddr;
        string buildingType;
        string completionDate;
        uint8 numberOfFloors;
        uint256 totalArea;
        uint256 ownerID;
        string usageStatus;
        uint256 landArea;

    }

}