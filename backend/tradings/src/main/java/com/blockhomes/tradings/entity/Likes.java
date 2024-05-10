package com.blockhomes.tradings.entity;

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
public class Likes {

    @Id
    @GeneratedValue
    @Column(name = "likes_no")
    private Integer likesNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wallet_no")
    private Wallet wallet;

    @Column(name = "created_at", insertable = false)
    private LocalDateTime createdAt;

}
