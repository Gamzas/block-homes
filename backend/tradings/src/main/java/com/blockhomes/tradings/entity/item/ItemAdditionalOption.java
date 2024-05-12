package com.blockhomes.tradings.entity.item;

import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no", nullable = false)
    private Item item;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "additional_info_no", nullable = false)
    private AdditionalInfo additionalInfo;


}
