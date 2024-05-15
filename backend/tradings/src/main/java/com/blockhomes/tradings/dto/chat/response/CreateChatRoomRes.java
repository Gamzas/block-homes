package com.blockhomes.tradings.dto.chat.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateChatRoomRes {

    private Integer chatRoomNo;
    private Integer itemNo;
    private String buyerWalletAddress;
    private String sellerWalletAddress;
    private LocalDateTime createdAt;

}
