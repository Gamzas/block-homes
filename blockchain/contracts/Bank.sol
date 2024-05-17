// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Bank is Ownable{

    struct Loan{
        address payable target;
        uint256 pendingLoanAmount;
        string pendingLoanMortgage;
    }

    event created(string mortgage, uint256 amount);

    mapping(string => Loan) loanRegistry;

    constructor() Ownable(msg.sender){}
    function createLoan(address _target,uint256 _amount, string calldata _mortgage) external onlyOwner{
        Loan storage newLoan = loanRegistry[_mortgage];
        newLoan.target=payable(_target);
        newLoan.pendingLoanAmount = _amount;
        newLoan.pendingLoanMortgage = _mortgage;
    }

    function getLoan(string memory _mortgage) public view returns(Loan memory) {
        return(loanRegistry[_mortgage]);
    }

}