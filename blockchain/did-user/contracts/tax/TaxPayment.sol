// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TaxPayment is Ownable {

    address payable private taxAccount;

    constructor(address _owner) Ownable(_owner) {
        taxAccount = payable(0xcd48b32650621694240fafb2d467cdb52fd95795);
    }

    event AcquisitionTaxPaid(uint256 klay);
    event CapitalGainsTaxPaid(uint256 klay);

    function payAcquisitionTax() external payable onlyOwner {
        require(msg.value > 0, "You need to send some KLAY");
        (bool sent, ) = taxAccount.call{value: msg.value}("");
        require(sent, "Failed to send KLAY to the tax account");
        emit AcquisitionTaxPaid(msg.value);
    }

    function payAcquisitionTax() external payable onlyOwner {
        require(msg.value > 0, "You need to send some KLAY");
        (bool sent, ) = taxAccount.call{value: msg.value}("");
        require(sent, "Failed to send KLAY to the tax account");
        emit CapitalGainsTaxPaid(msg.value);
    }

    function setBankAccount(address payable _newTaxAccount) public onlyOwner {
        taxAccount = _newTaxAccount;
    }

}