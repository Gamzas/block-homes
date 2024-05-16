package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.chat.ChatPayload;
import com.blockhomes.tradings.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {

    private final ChatService chatService;
    private final RabbitTemplate rabbitTemplate;

    @MessageMapping("chat.enter.{chatRoomNo}")
    public MessageInfo enterUser(@DestinationVariable("chatRoomNo") Integer chatRoomNo,
                                 @Payload ChatPayload chatPayload) {

    }




}
