package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "chat")
public class Chat extends BaseEntity {

    @Id
    @Column(name = "chat_no")
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
    @Column(name = "message", nullable = false)
    private String message;

}
