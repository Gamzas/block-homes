package com.blockhomes.tradings.dto.chat.response;

import com.blockhomes.tradings.dto.chat.MessageType;
import com.blockhomes.tradings.entity.chat.ContractStep;
import com.blockhomes.tradings.entity.common.RoleCategory;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ChatRes {

    private Integer chatNo;
    private Integer chatRoomNo;
    private String senderWalletAddress;
    private String senderName;
    private Integer messageType;
    private String image;
    private Integer contractStep;
    private String message;
    private LocalDateTime createdAt;

    @Builder
    public ChatRes(
        Integer chatNo,
        Integer chatRoomNo,
        String senderWalletAddress,
        String senderName,
        MessageType messageType,
        String image,
        ContractStep contractStep,
        String message,
        LocalDateTime createdAt
    ) {
        this.chatNo = chatNo;
        this.chatRoomNo = chatRoomNo;
        this.senderWalletAddress = senderWalletAddress;
        this.senderName = senderName;
        this.messageType = MessageType.enumToValue(messageType);
        this.image = image;
        this.contractStep = ContractStep.enumToValue(contractStep);
        this.message = message;
        this.createdAt = createdAt;
    }

}
