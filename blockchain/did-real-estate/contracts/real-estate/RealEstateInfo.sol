// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateInfo is Ownable {

    struct RealEstate {
        string roadNameAddress; // 도로명주소
        string buildingName; // 건물명
        uint16 buildingNumber; // 동 번호 (아파트 동)
        uint16 roomNumber; // 호수 번호
        string genDate; // 생성 일자
        bool isViolated; // 위반건축물 여부
        bool isNotPermitted; // 무허가건축물 여부
        string mainUsage; // 주용도
    }

    RealEstate realEstate;

    constructor(address _owner) Ownable(_owner) {}

    function setRealEstateInfo(RealEstate calldata _realEstate) external onlyOwner {
        realEstate = RealEstate({
            roadNameAddress: _realEstate.roadNameAddress,
            buildingName: _realEstate.buildingName,
            buildingNumber: _realEstate.buildingNumber,
            roomNumber: _realEstate.roomNumber,
            genDate: _realEstate.genDate,
            isViolated: _realEstate.isViolated,
            isNotPermitted: _realEstate.isNotPermitted,
            mainUsage: _realEstate.mainUsage
        });
    }

   
    function getBasicInfo() external view returns (RealEstate memory) {
        return realEstate;
    }

}