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
@Table(name = "item_additional_info")
public class ItemAdditionalInfo extends BaseEntity {

    @Id
    @Column(name = "item_additional_info_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemAdditionalInfoNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "additional_info_no")
    private AdditionalInfo additionalInfo;


}
