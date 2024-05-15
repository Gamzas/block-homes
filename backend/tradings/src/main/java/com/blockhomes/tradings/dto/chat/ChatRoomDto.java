package com.blockhomes.tradings.dto.chat;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomDto {

    private String chatRoomId;
    private Integer itemNo;
    private Integer sellerStep;
    private Integer buyerStep;

}
