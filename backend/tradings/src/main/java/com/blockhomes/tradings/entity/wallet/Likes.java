package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "likes")
public class Likes extends BaseEntity {

    @Id
    @Column(name = "likes_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer likesNo;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no", nullable = false)
    private Item item;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wallet_no", nullable = false)
    private Wallet wallet;

    @Builder
    public Likes(Wallet wallet, Item item) {
        this.wallet = wallet;
        this.item = item;
    }

}
