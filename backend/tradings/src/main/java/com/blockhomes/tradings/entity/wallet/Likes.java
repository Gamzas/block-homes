package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.item.Item;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wallet_no")
    private Wallet wallet;

}
