package com.blockhomes.tradings.entity.item;

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
@Table(name = "item_additional_option")
public class ItemAdditionalOption extends BaseEntity {

    @Id
    @Column(name = "item_additional_option_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemAdditionalInfoNo;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no", nullable = false)
    private Item item;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "option_name", nullable = false)
    private AdditionalOptionCategory additionalOptionCategory;

    @Builder
    public ItemAdditionalOption(Item item, AdditionalOptionCategory additionalOptionCategory) {
        this.item = item;
        this.additionalOptionCategory = additionalOptionCategory;
    }

}
