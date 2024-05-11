package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Column(name = "public_key")
    private String publicKey;

    @Column(name = "enc_private_key")
    private String encPrivateKey;

    @Column(name = "name")
    private String name;

}
