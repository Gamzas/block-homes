package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.item.Item;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "chat_room")
public class ChatRoom extends BaseEntity {

    @Id
    @Column(name = "chat_room_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatRoomNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @Column(name = "seller_step")
    private Integer sellerStep;

    @Column(name = "buyer_step")
    private Integer buyerStep;

    @Column(name = "session_id")
    private String sessionId;

}
