package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.item.Item;
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
@Table(name = "chat_room")
public class ChatRoom extends BaseEntity {

    @Id
    @Column(name = "chat_room_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chatRoomNo;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no", nullable = false)
    private Item item;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "contract_step", nullable = false)
    private ContractStep contractStep;

    @Column(name = "temp_contract_address")
    private String tempContractAddress;

    @Builder
    public ChatRoom(Item item) {
        this.item = item;
        contractStep = ContractStep.CONTRACT_CREATED;
    }

}
