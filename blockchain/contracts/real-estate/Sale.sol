// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sale{

    struct Signature{
        bytes32 r;
        bytes32 s;
        uint8 v;
    }

    struct ContractInfo {
        string sellerDID; // 판매자의 DID
        string buyerDID; // 구매자의 DID
        uint256 price; // 거래 금액
        string propertyDID; // 부동산의 DID
        string contractDate; // 계약 날짜
        string terms; // 계약의 세부 조건들
    }

    struct SaleContract {
        ContractInfo contractInfo;
        Signature sellerSignature;
        Signature buyerSignature;
    }

    SaleContract public sale;

    address payable sellerAddress;
    address payable buyerAddress;

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
        string memory _sellerDID,
        string memory _buyerDID,
        uint256 _price,
        string memory _propertyDID, 
        string memory _contractDate,
        string memory _terms) private pure returns (bytes32){
        
        return keccak256(abi.encodePacked(_sellerDID,_buyerDID,_price,_propertyDID,_contractDate,_terms));
    }

    constructor (
        address _sellerAddress,
        address _buyerAddress,
        uint256 _price,
        string memory _propertyDID,
        string memory _contractDate,
        string memory _terms,
        bytes32 _r, bytes32 _s, uint8 _v
    ) {
        sellerAddress = payable(_sellerAddress);
        buyerAddress = payable(_buyerAddress);

        // 계약 정보 초기화
        sale.contractInfo.sellerDID = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(_sellerAddress)), 20)));
        sale.contractInfo.buyerDID = string(abi.encodePacked("did:klay:", toHexString(uint256(uint160(_buyerAddress)), 20)));
        sale.contractInfo.price = _price;
        sale.contractInfo.propertyDID = _propertyDID;
        sale.contractInfo.contractDate = _contractDate;
        sale.contractInfo.terms = _terms;

        sale.sellerSignature.r=_r;
        sale.sellerSignature.s=_s;
        sale.sellerSignature.v=_v;
    }

    // 구매자가 이더를 보낼 수 있는 payable 함수
    function buyerSign(bytes32 _r, bytes32 _s, uint8 _v) public payable {
        require(msg.sender == sellerAddress, "You are not the buyer.");
        require(msg.value == sale.contractInfo.price, "Less or more than deposit.");
        sale.buyerSignature.r=_r;
        sale.buyerSignature.s=_s;
        sale.buyerSignature.v=_v;
        // 받은 돈을 판매자에게 전송
        sellerAddress.transfer(msg.value);
    }

    function verifySellerSignature() public view returns (bool) {
        bytes32 messageHash = getMessageHash(sale.contractInfo.sellerDID,sale.contractInfo.buyerDID,sale.contractInfo.price,sale.contractInfo.propertyDID,sale.contractInfo.contractDate,sale.contractInfo.terms);
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash)
        );

        // ecrecover를 사용하여 서명자 주소 복구
        address recoveredSigner = ecrecover(ethSignedMessageHash, sale.sellerSignature.v, sale.sellerSignature.r, sale.sellerSignature.s);
        return (recoveredSigner==sellerAddress);
    }

    function verifyBuyerSignature() public view returns (bool) {
        bytes32 messageHash = getMessageHash(sale.contractInfo.sellerDID,sale.contractInfo.buyerDID,sale.contractInfo.price,sale.contractInfo.propertyDID,sale.contractInfo.contractDate,sale.contractInfo.terms);
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash)
        );

        // ecrecover를 사용하여 서명자 주소 복구
        address recoveredSigner = ecrecover(ethSignedMessageHash, sale.buyerSignature.v, sale.buyerSignature.r, sale.buyerSignature.s);
        return (recoveredSigner==buyerAddress);
    }
}