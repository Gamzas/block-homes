package com.blockhomes.tradings.entity.chat;

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
@Table(name = "chat_provision")
public class ChatProvision extends BaseEntity {

    @Id
    @Column(name = "chat_provision_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatProvisionNo;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "chat_room_no", nullable = false)
    private ChatRoom chatRoom;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "special_provision_no", nullable = false)
    private SpecialProvision specialProvision;

}
