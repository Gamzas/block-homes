package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.common.BaseEntity;
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
@Table(name = "contract")
public class Contract extends BaseEntity {

    @Id
    @Column(name = "contract_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer contractNo;

    @NotNull
    @Column(name = "contract_address", nullable = false)
    private String contractAddress;

    @Builder
    public Contract(String contractAddress) {
        this.contractAddress = contractAddress;
    }

}
