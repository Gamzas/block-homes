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
        bool isViolated; //불법건축물 여부
        bool isNotPermitted; //무허가건축물 여부
        uint8 estateType; // 주거 유형
        string area; // 면적
        uint16 date; //등록 일자
        string purpose; //용도
    }

    BasicInfo basicInfo;

    constructor(
        string memory _roadNameAddress,
        string memory _buildingName,
        uint16  _buildingNumber,
        uint16 _roomNumber,
        bool _isViolated,
        bool _isNotPermitted,
        uint8 _estateType,
        string memory _area,
        uint16 _date,
        string memory _purpose
    ) Ownable(msg.sender) {
        basicInfo.roadNameAddress = _roadNameAddress;
        basicInfo.buildingName = _buildingName;
        basicInfo.buildingNumber = _buildingNumber;
        basicInfo.roomNumber = _roomNumber;
        basicInfo.isViolated = _isViolated;
        basicInfo.isNotPermitted = _isNotPermitted;
        basicInfo.estateType = _estateType;
        basicInfo.area = _area;
        basicInfo.date = _date;
        basicInfo.purpose = _purpose;
    }

    function getRealEstateInfo() external view returns (BasicInfo memory) {
        return (basicInfo);
    }

}