// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TaxPayment is Ownable {

    address payable private payerAccount;

    constructor(address _payerAddress) Ownable(msg.sender) {
        payerAccount=payable(_payerAddress);
    }

    event PropertyTaxPaid(uint256 klay);
    event AcquisitionTaxPaid(uint256 klay);
    event CapitalGainsTaxPaid(uint256 klay);

    function payPropertyTax() external payable {
        require(msg.value > 0, "You need to send some KLAY");
        require(msg.sender==payerAccount, "Incorrect Contract Address");
        (bool sent, ) = owner().call{value: msg.value}("");
        require(sent, "Failed to send KLAY to the tax account");
        emit PropertyTaxPaid(msg.value);
    }

    function payAcquisitionTax() external payable {
        require(msg.value > 0, "You need to send some KLAY");
        require(msg.sender==payerAccount, "Incorrect Contract Address");
        (bool sent, ) = owner().call{value: msg.value}("");
        require(sent, "Failed to send KLAY to the tax account");
        emit AcquisitionTaxPaid(msg.value);
    }

    function payCapitalGainsTax() external payable {
        require(msg.value > 0, "You need to send some KLAY");
        require(msg.sender==payerAccount, "Incorrect Contract Address");
        (bool sent, ) = owner().call{value: msg.value}("");
        require(sent, "Failed to send KLAY to the tax account");
        emit CapitalGainsTaxPaid(msg.value);
    }

}