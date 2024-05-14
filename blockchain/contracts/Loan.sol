// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Loan {

    address payable private bankAccount;
    address payable private target;

    uint256 public pendingLoanAmount;
    string public pendingLoanMortgage;

    mapping(string => uint256) mortgageAmounts;

    constructor(address payable _target) {

        bankAccount = payable(0xC0a88521a8669e453c02D37cEed99dBb0a4dc508);
        target = _target;
    }

    event Borrowed(string mortgage, uint256 amount);

    function sendLoanRequest(string memory mortgage, uint256 amount) external {
        require(msg.sender == target, "Only the designated target can request a loan");
        pendingLoanAmount = amount;
        pendingLoanMortgage = mortgage;
    }

    function assignLoanRequest() external {
        require(pendingLoanAmount > 0, "No pending loan amount to assign");
        require(address(this).balance >= pendingLoanAmount, "Insufficient funds in the contract");

        target.transfer(pendingLoanAmount); // 대출 금액을 target에게 이체
        
        emit Borrowed(pendingLoanMortgage, pendingLoanAmount); // 이벤트 로깅

        pendingLoanAmount = 0; // 대출 금액 초기화
    }

}