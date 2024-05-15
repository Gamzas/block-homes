// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LongTermRent {

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
    }

    LongTermRentContract public rentalContract;

    address payable landlordAddress;
    address payable tenantAddress;

    function toHexString(uint256 value, uint length) private pure returns (string memory) {
        bytes memory buffer = new bytes(2 * length + 2);
        buffer[0] = '0';
        buffer[1] = 'x';
        for (uint i = 2 * length + 1; i > 1; --i) {
            buffer[i] = bytes1(uint8(value & 0xf) + (value & 0xf < 10 ? 48 : 87));
            value >>= 4;
        }
        return string(buffer);
    }

    constructor payable(
        address _landlordAddress,
        address _tenantAddress,
        uint16 _leasePeriod,
        uint256 _deposit,
        string memory _propertyDID,
        uint256 _contractDate,
        string[] memory _terms
    ) {
        landlordAddress = payable(_landlordAddress);
        tenantAddress = payable(_tenantAddress);

        // 계약 정보 초기화
        rentalContract.contractInfo.landlordDID = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(_landlordAddress)), 20)));
        rentalContract.contractInfo.tenantDID = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(_tenantAddress)), 20)));
        rentalContract.contractInfo.leasePeriod = _leasePeriod;
        rentalContract.contractInfo.deposit = _deposit;
        rentalContract.contractInfo.propertyDID = _propertyDID;
        rentalContract.contractInfo.contractDate = _contractDate;
        rentalContract.contractInfo.terms = _terms;

        // 계약 정보의 해시 저장
        rentalContract.contractInfoHash = keccak256(abi.encode(rentalContract));
    }

    
    // 임차인이 이더를 보낼 수 있는 payable 함수
    function payDeposit() public payable {
        require(msg.sender == tenantAddress, "Only the tenant can pay the deposit.");
        require(msg.value >= rentalContract.contractInfo.deposit, "Deposit amount is not sufficient.");

        // 받은 돈을 임대인에게 전송
        landlordAddress.transfer(msg.value);
    }

    // 임대인이 보증금을 컨트랙트에 입금
    function returnDeposit() public payable {
        require(msg.sender == landlordAddress, "Only the landlord can deposit.");
        require(msg.value >= rentalContract.contractInfo.deposit, "Insufficient funds to cover the deposit.");
    }

    // 임차인이 보증금을 인출
    function withdrawDeposit() public {
        require(msg.sender == tenantAddress, "Only the tenant can withdraw the deposit.");
        require(block.timestamp >= rentalContract.contractInfo.contractDate + rentalContract.contractInfo.leasePeriod * 30 days, "Lease has not yet expired.");
        tenantAddress.transfer(address(this).balance);
    }

}