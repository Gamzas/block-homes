package com.blockhomes.tradings.entity.item;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.item.enums.ItemImageCategory;
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
@Table(name = "item_image")
public class ItemImage extends BaseEntity {

    @Id
    @Column(name = "item_image_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemImageNo;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no", nullable = false)
    private Item item;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_no", nullable = false)
    private Image image;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "item_image_category", nullable = false)
    private ItemImageCategory itemImageCategory;

    @Builder
    public ItemImage(Item item, Image image, ItemImageCategory itemImageCategory) {
        this.item = item;
        this.image = image;
        this.itemImageCategory = itemImageCategory;
    }

}
