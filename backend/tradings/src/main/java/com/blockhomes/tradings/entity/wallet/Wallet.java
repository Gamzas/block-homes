package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "wallet")
public class Wallet extends BaseEntity {

    @Id
    @Column(name = "wallet_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer walletNo;

    @NotNull
    @Column(name = "wallet_address", unique = true, nullable = false)
    private String walletAddress;

    @NotNull
    @Column(name = "user_did", unique = true, nullable = false)
    private String userDID;

    @NotNull
    @Column(name = "enc_private_key", nullable = false)
    private String encPrivateKey;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Builder
    public Wallet(String walletAddress, String encPrivateKey, String name) {
        this.walletAddress = walletAddress;
        this.encPrivateKey = encPrivateKey;
        this.name = name;

        userDID = "did:klay:" + walletAddress;
    }

}
