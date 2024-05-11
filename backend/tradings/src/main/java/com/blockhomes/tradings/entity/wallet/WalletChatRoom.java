package com.blockhomes.tradings.entity.wallet;

import com.blockhomes.tradings.entity.chat.ChatRoom;
import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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

    @NotNull
    @ManyToOne
    @JoinColumn(name = "chat_room_no", nullable = false)
    private ChatRoom chatRoom;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "wallet_no", nullable = false)
    private Wallet wallet;

    @NotNull
    @Column(name = "role", nullable = false)
    private Integer role;

}
