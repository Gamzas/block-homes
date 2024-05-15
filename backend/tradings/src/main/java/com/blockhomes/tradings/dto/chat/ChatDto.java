package com.blockhomes.tradings.dto.chat;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatDto {

    private MessageType messageType;
    private Integer chatRoomNo;
    private String sender;
    private String message;
    private LocalDateTime createdAt;


}
