package com.blockhomes.tradings.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Wallet {

    @Id
    @GeneratedValue
    @Column(name = "wallet_no")
    private Integer walletNo;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "public_key")
    private String publicKey;

    @Column(name = "enc_private_key")
    private String encPrivateKey;

}
