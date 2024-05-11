package com.blockhomes.tradings.entity.item;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.Image;
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
    @Column(name = "item_image_category", nullable = false)
    private Integer itemImageCategory;

}
