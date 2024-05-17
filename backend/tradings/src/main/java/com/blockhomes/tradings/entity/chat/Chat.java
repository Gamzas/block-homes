package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.dto.chat.MessageType;
import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "chat")
public class Chat extends BaseEntity {

    @Id
    @Column(name = "chat_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatNo;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "chat_room_no", nullable = false)
    private ChatRoom chatRoom;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "wallet_no", nullable = false)
    private Wallet wallet;

    @OneToOne
    @JoinColumn(name = "image_no")
    private Image image;

    @NotNull
    @Column(name = "message", nullable = false, length = 500)
    private String message;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "message_type", nullable = false)
    private MessageType messageType;

    @Builder
    public Chat(ChatRoom chatRoom, Wallet wallet, Image image, String message, MessageType messageType) {
        this.chatRoom = chatRoom;
        this.wallet = wallet;
        this.image = image;
        this.message = message;
        this.messageType = messageType;
    }

}
