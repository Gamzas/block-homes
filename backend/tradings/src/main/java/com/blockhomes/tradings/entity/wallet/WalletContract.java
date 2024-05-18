package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.RoleCategory;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "wallet_contract")
public class WalletContract extends BaseEntity {

    @Id
    @Column(name = "wallet_contract_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer walletContractNo;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private RoleCategory roleCategory;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "wallet_no", nullable = false)
    private Wallet wallet;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "contract_no", nullable = false)
    private Contract contract;

    @Builder
    public WalletContract(RoleCategory roleCategory, Wallet wallet, Contract contract) {
        this.roleCategory = roleCategory;
        this.wallet = wallet;
        this.contract = contract;
    }

}
