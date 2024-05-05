// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library DIDStructs {

    struct PublicKey {
        string id;
        string keyType;
        string controller;
        string publicKeyData;
    }

    struct Service {
        string id;
        string serviceType;
        string serviceEndPoint;
    }

    struct DIDDocument {
        string context;
        string id;
        PublicKey publicKey;
        string authentication;
        Service service;
    }

}