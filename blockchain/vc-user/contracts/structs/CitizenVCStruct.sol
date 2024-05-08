// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library CitizenVCStruct {

    struct Name{
        string value;
        string lang;
    }

    struct CitizenOf{
        string id; //issuer의 did
        Name name;
    }

    struct CredentialSubject{
        string id; // holder의 did
        CitizenOf citizenOf;
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