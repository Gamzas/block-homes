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

        bytes landlordSignature; // 임대인의 서명
        bytes tenantSignature; // 임차인의 서명
    }

    LongTermRentContract public rentalContract;

    address payable landlordAddress;
    address payable tenantAddress;

    constructor(
        address payable _landlordAddress,
        address payable _tenantAddress,
        string memory _landlordDID,
        string memory _tenantDID,
        uint16 _leasePeriod,
        uint256 _deposit,
        string memory _propertyDID,
        uint256 _contractDate,
        string[] memory _terms
    ) {
        landlordAddress = _landlordAddress;
        tenantAddress = _tenantAddress;

        // 계약 정보 초기화
        rentalContract.contractInfo.landlordDID = _landlordDID;
        rentalContract.contractInfo.tenantDID = _tenantDID;
        rentalContract.contractInfo.leasePeriod = _leasePeriod;
        rentalContract.contractInfo.deposit = _deposit;
        rentalContract.contractInfo.propertyDID = _propertyDID;
        rentalContract.contractInfo.contractDate = _contractDate;
        rentalContract.contractInfo.terms = _terms;

        // 계약 정보의 해시 저장
        rentalContract.contractInfoHash = keccak256(abi.encode(rentalContract));
    }

    function signContractByLandlord(bytes memory _landlordSignature) external {
        require(msg.sender == landlordAddress, "Only landlord can sign the contract.");
        rentalContract.landlordSignature = _landlordSignature;
    }

    function signContractByTenant(bytes memory _tenantSignature) external {
        require(msg.sender == tenantAddress, "Only landlord can sign the contract.");
        rentalContract.tenantSignature = _tenantSignature;
    }

    // 계약의 유효성 확인
    function verifyContract() public view returns (bool) {
        bytes32 hash = keccak256(
            abi.encode(
                rentalContract.contractInfo.landlordDID,
                rentalContract.contractInfo.tenantDID,
                rentalContract.contractInfo.leasePeriod,
                rentalContract.contractInfo.deposit,
                rentalContract.contractInfo.propertyDID,
                rentalContract.contractInfo.contractDate,
                rentalContract.contractInfo.terms
            )
        );

        return rentalContract.contractInfoHash == hash;
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