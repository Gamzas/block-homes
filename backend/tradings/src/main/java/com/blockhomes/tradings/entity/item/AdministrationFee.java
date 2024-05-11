package com.blockhomes.tradings.entity.item;

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
@Table(name = "administration_fee")
public class AdministrationFee extends BaseEntity {

    @Id
    @Column(name = "administration_fee_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer administrationFeeNo;

    @Column(name = "name")
    private String name;

}
