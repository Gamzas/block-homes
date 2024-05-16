package com.blockhomes.tradings.dto.chat;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatPayload {

    private String senderWalletAddress;
    private Integer senderRole;
    private String message;
    private String imageBase64;

}
