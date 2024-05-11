package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "chat_provision")
public class ChatProvision extends BaseEntity {

    @Id
    @Column(name = "chat_provision_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatProvisionNo;

    @ManyToOne
    @JoinColumn(name = "chat_room_no")
    private ChatRoom chatRoom;

    @ManyToOne
    @JoinColumn(name = "special_provision_no")
    private SpecialProvision specialProvision;

}
