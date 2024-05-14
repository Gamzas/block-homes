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

    BasicInfo basicInfo;

    constructor(
        string memory _roadNameAddress,
        string memory _buildingName,
        uint16  _buildingNumber,
        uint16 _roomNumber
    ) Ownable(msg.sender) {
        basicInfo.roadNameAddress = _roadNameAddress;
        basicInfo.buildingName = _buildingName;
        basicInfo.buildingNumber = _buildingNumber;
        basicInfo.roomNumber = _roomNumber;
    }

    function getRealEstateInfo() external view returns (BasicInfo memory) {
        return (basicInfo);
    }


}