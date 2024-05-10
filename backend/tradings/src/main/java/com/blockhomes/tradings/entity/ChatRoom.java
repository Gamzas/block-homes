package com.blockhomes.tradings.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "chat_room")
public class ChatRoom {

    @Id
    @Column(name = "chat_room_no")
    private Integer chatRoomNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @Column(name = "sender_did")
    private String senderDID;

    @Column(name = "buyer_did")
    private String buyerDID;

    @Column(name = "")

}
