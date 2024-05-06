// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialBox {
    
    address private issuerAddress;
    
    uint256 private idx;

    struct Credential{
        uint256 id; 
        address issuer;
        string value;
    }

    mapping(address => Credential) private credentials;

    constructor() {
        issuerAddress = msg.sender;
        idx = 1;
    }

    function claimCredential(address _holderAddress, string calldata _value) public returns(bool){
        require(issuerAddress == msg.sender, "Not Issuer");
				Credential storage credential = credentials[_holderAddress]; 
        require(credential.id == 0); 
        
        credential.id = idx;
        credential.issuer = msg.sender;
        credential.value = _value;
        
        idx += 1;

        return true;
    }

    function getCredential(address _holderAddress) public view returns (Credential memory){
        return credentials[_holderAddress];
    }

}