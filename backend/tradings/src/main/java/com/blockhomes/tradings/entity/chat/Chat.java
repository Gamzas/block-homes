package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.common.Image;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "chat_room_no")
    private ChatRoom chatRoom;

    @ManyToOne
    @JoinColumn(name = "wallet_no")
    private Wallet wallet;

    @OneToOne
    @JoinColumn(name = "image_no")
    private Image image;

    @Column(name = "message")
    private String message;

}
