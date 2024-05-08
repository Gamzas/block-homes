// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library OwnershipVCStruct {

    struct Name{
        string value;
        string lang;
    }

    struct OwnerOf{
        string id; //issuer의 did
        Name name;
    }

    struct CredentialSubject{
        string id; // holder의 did
        OwnerOf ownerOf;
    }

    struct Proof{
        string proofType;
        string proofPurpose;
        string verificationMethod;
        string jws;
    }

    struct Credential {
        string context;
        string id;
        string credentialType;
        string issuer;
        uint issuanceDate;
        CredentialSubject credentialSubject;
        Proof proof;
    }

}