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
@Table(name = "additional_info")
public class AdditionalInfo extends BaseEntity {

    @Id
    @Column(name = "addditional_info_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer additionalInfoNo;

    @Column(name = "name")
    private String additionalInfoName;

}
