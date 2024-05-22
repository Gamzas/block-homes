package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.RoleCategory;
import com.blockhomes.tradings.entity.wallet.Wallet;
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
@Table(name = "wallet_chat_room")
public class WalletChatRoom extends BaseEntity {

    @Id
    @Column(name = "wallet_chat_room_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer walletChatRoomNo;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "chat_room_no", nullable = false)
    private ChatRoom chatRoom;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "wallet_no", nullable = false)
    private Wallet wallet;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private RoleCategory roleCategory;

    @Builder
    public WalletChatRoom(ChatRoom chatRoom, Wallet wallet, RoleCategory roleCategory) {
        this.chatRoom = chatRoom;
        this.wallet = wallet;
        this.roleCategory = roleCategory;
    }

}
