package com.blockhomes.tradings.dto.chat.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRes {

    private Integer chatNo;
    private Integer chatRoomNo;
    private String senderWalletAddress;
    private String senderName;
    private String image;
    private Integer buyerStep;
    private Integer sellerStep;
    private LocalDateTime createdAt;

}
