package com.blockhomes.tradings.dto.chat.response;

import com.blockhomes.tradings.dto.chat.MessageType;
import com.blockhomes.tradings.entity.chat.ContractStep;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProgressRes {

    private Integer chatRoomNo;
    private Integer messageType;
    private Integer contractStep;
    private String message;
    private LocalDateTime createdAt;

    @Builder
    public ProgressRes(
        Integer chatRoomNo,
        MessageType messageType,
        ContractStep contractStep,
        String message,
        LocalDateTime createdAt) {
        this.chatRoomNo = chatRoomNo;
        this.messageType = MessageType.enumToValue(messageType);
        this.contractStep = ContractStep.enumToValue(contractStep);
        this.message = message;
        this.createdAt = createdAt;
    }
}
