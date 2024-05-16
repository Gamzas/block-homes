package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.chat.payload.ChatPayload;
import com.blockhomes.tradings.dto.chat.payload.EnterPayload;
import com.blockhomes.tradings.dto.chat.payload.ProgressPayload;
import com.blockhomes.tradings.dto.chat.payload.ProvisionPayload;
import com.blockhomes.tradings.dto.chat.response.ChatRes;
import com.blockhomes.tradings.dto.chat.response.ProgressRes;
import com.blockhomes.tradings.dto.chat.response.ProvisionRes;
import com.blockhomes.tradings.service.ChatService;
import jakarta.validation.Valid;
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
    public ChatRes enterUser(@DestinationVariable Integer chatRoomNo, @Payload @Valid EnterPayload enterPayload) {
        return chatService.enterUser(chatRoomNo, enterPayload);
    }

    @MessageMapping("chat.talk.{chatRoomNo}")
    public ChatRes chatTalk(@DestinationVariable Integer chatRoomNo, @Payload @Valid ChatPayload chatPayload) {
        return chatService.chatTalk(chatRoomNo, chatPayload);
    }

    @MessageMapping("chat.progress.{chatRoomNo}")
    public ProgressRes progressContract(@DestinationVariable Integer chatRoomNo, @Payload @Valid ProgressPayload progressPayload) {
        return chatService.progressContract(chatRoomNo, progressPayload);
    }

    @MessageMapping("chat.provision.{chatRoomNo}")
    public ProvisionRes createSpecialProvision(@DestinationVariable Integer chatRoomNo, @Payload @Valid ProvisionPayload provisionPayload) {
        return chatService.createSpecialProvision(chatRoomNo, provisionPayload);
    }

    @MessageMapping("chat.reject.{chatRoomNo}")
    public ChatRes rejectProvision(@DestinationVariable Integer chatRoomNo, @Payload @Valid ChatPayload chatPayload) {
        return chatService.rejectProvision(chatRoomNo, chatPayload);
    }

}
