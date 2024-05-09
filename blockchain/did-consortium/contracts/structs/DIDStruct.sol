// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library DIDStruct {

    struct PublicKey {
        string id;
        string keyType;
        string controller;
        string publicKeyData;
    }

    struct DIDDocument {
        string context;
        string id;
        PublicKey publicKey;
        string authentication;
    }

}