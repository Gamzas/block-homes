package com.blockhomes.tradings.dto.chat.response;

import com.blockhomes.tradings.dto.chat.MessageType;
import com.blockhomes.tradings.entity.chat.ContractStep;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProvisionRes {

    private Integer chatRoomNo;
    private List<Integer> provisionList;
    private Integer messageType;
    private Integer contractStep;
    private String message;
    private LocalDateTime createdAt;

    @Builder
    public ProvisionRes(
        Integer chatRoomNo,
        List<Integer> provisionList,
        MessageType messageType,
        ContractStep contractStep,
        String message,
        LocalDateTime createdAt
    ) {
        this.chatRoomNo = chatRoomNo;
        this.provisionList = provisionList;
        this.messageType = MessageType.enumToValue(messageType);
        this.contractStep = ContractStep.enumToValue(contractStep);
        this.message = message;
        this.createdAt = createdAt;
    }


}
