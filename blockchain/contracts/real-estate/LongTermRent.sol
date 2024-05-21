// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LongTermRent {

    struct Signature{
        bytes32 r;
        bytes32 s;
        uint8 v;
    }

    struct ContractInfo {
        string landlordDID; // 임대인의 분산식 식별자
        string tenantDID; // 임차인의 분산식 식별자
        uint16 leasePeriod; // 임대 기간 (월 단위)
        uint256 deposit; // 전세금
        string propertyDID; // 부동산의 분산식 식별자
        string contractDate; // 계약 날짜
        string terms; // 계약의 세부 조건들
    }

    struct LongTermRentContract {
        ContractInfo contractInfo;
        Signature tenantSignature;
        Signature landlordSignature;
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

    function getMessageHash(
        string memory _landlordDID,
        string memory _tenantDID,
        uint16 _leasePeriod, 
        uint256 _deposit,
        string memory _propertyDID, 
        string memory _contractDate,
        string memory _terms) private pure returns (bytes32){
        
        return keccak256(abi.encodePacked(_landlordDID,_tenantDID,_leasePeriod,_deposit,_propertyDID,_contractDate,_terms));
    }

    constructor (
        address _landlordAddress,
        address _tenantAddress,
        uint16 _leasePeriod,
        uint256 _deposit,
        string memory _propertyDID,
        string memory _contractDate,
        string memory _terms,
        bytes32 _r, bytes32 _s, uint8 _v
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

        rentalContract.landlordSignature.r=_r;
        rentalContract.landlordSignature.s=_s;
        rentalContract.landlordSignature.v=_v;
    }

    // 임차인이 이더를 보낼 수 있는 payable 함수
    function tenantSign(bytes32 _r, bytes32 _s, uint8 _v) public payable {
        require(msg.sender == tenantAddress, "You are not the tenant.");
        require(msg.value == rentalContract.contractInfo.deposit, "Less or more than deposit.");
        rentalContract.tenantSignature.r=_r;
        rentalContract.tenantSignature.s=_s;
        rentalContract.tenantSignature.v=_v;
        // 받은 돈을 임대인에게 전송
        landlordAddress.transfer(msg.value);
    }

    // 계약기간이 끝났을 때 보증금 반환
    function withdrawDeposit() public payable {
        require(msg.sender == landlordAddress, "You are not the landlord");
        tenantAddress.transfer(address(this).balance);
    }

    function verifyTenantSignature() public view returns (bool) {
        bytes32 messageHash = getMessageHash(rentalContract.contractInfo.landlordDID,rentalContract.contractInfo.tenantDID,rentalContract.contractInfo.leasePeriod,rentalContract.contractInfo.deposit,rentalContract.contractInfo.propertyDID,rentalContract.contractInfo.contractDate,rentalContract.contractInfo.terms);
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash)
        );

        // ecrecover를 사용하여 서명자 주소 복구
        address recoveredSigner = ecrecover(ethSignedMessageHash, rentalContract.tenantSignature.v, rentalContract.tenantSignature.r, rentalContract.tenantSignature.s);
        return (recoveredSigner==tenantAddress);
    }

    function verifyLandlordSignature() public view returns (bool) {
        bytes32 messageHash = getMessageHash(rentalContract.contractInfo.landlordDID,rentalContract.contractInfo.tenantDID,rentalContract.contractInfo.leasePeriod,rentalContract.contractInfo.deposit,rentalContract.contractInfo.propertyDID,rentalContract.contractInfo.contractDate,rentalContract.contractInfo.terms);
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash)
        );

        // ecrecover를 사용하여 서명자 주소 복구
        address recoveredSigner = ecrecover(ethSignedMessageHash, rentalContract.landlordSignature.v, rentalContract.landlordSignature.r, rentalContract.landlordSignature.s);
        return (recoveredSigner==landlordAddress);
    }

}