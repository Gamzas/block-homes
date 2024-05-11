package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.chat.ChatRoom;
import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "wallet_chat_room")
public class WalletChatRoom extends BaseEntity {

    @Id
    @Column(name = "wallet_chat_room_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatRoomNo;

    @ManyToOne
    @JoinColumn(name = "chat_room_no")
    private ChatRoom chatRoom;

    @ManyToOne
    @JoinColumn(name = "wallet_no")
    private Wallet wallet;

    @Column(name = "role")
    private Integer role;

}
