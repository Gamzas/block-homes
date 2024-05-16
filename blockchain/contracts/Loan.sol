// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Loan is Ownable{

    address payable private target;
    uint256 public pendingLoanAmount;
    string public pendingLoanMortgage;

    event created(string mortgage, uint256 amount);

    constructor(address payable _target,uint256 _pendingLoanAmount,string memory _pendingLoanMortgage) Ownable(msg.sender){
        target = _target;
        pendingLoanAmount=_pendingLoanAmount;
        pendingLoanMortgage=_pendingLoanMortgage;
        emit created(pendingLoanMortgage,pendingLoanAmount);
    }

}