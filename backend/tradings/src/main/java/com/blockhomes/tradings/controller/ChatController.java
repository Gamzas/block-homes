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
        ChatRes result = chatService.enterUser(chatRoomNo, enterPayload);
        rabbitTemplate.convertAndSend("chat.exchange", "enter.room." + chatRoomNo, result);
        return result;
    }

    @MessageMapping("chat.talk.{chatRoomNo}")
    public ChatRes chatTalk(@DestinationVariable Integer chatRoomNo, @Payload @Valid ChatPayload chatPayload) {
        ChatRes result = chatService.chatTalk(chatRoomNo, chatPayload);
        rabbitTemplate.convertAndSend("chat.exchange", "*.room." + chatRoomNo, result);
        return result;
    }

    @MessageMapping("chat.progress.{chatRoomNo}")
    public ProgressRes progressContract(@DestinationVariable Integer chatRoomNo, @Payload @Valid ProgressPayload progressPayload) {
        ProgressRes result =  chatService.progressContract(chatRoomNo, progressPayload);
        rabbitTemplate.convertAndSend("chat.exchange", "*.room." + chatRoomNo, result);

        return result;
    }

    @MessageMapping("chat.provision.{chatRoomNo}")
    public ProvisionRes createSpecialProvision(@DestinationVariable Integer chatRoomNo, @Payload @Valid ProvisionPayload provisionPayload) {
        ProvisionRes result = chatService.createSpecialProvision(chatRoomNo, provisionPayload);
        rabbitTemplate.convertAndSend("chat.exchange", "*.room." + chatRoomNo, result);

        return result;
    }

    @MessageMapping("chat.reject.{chatRoomNo}")
    public ChatRes rejectProvision(@DestinationVariable Integer chatRoomNo, @Payload @Valid ChatPayload chatPayload) {
        ChatRes result = chatService.rejectProvision(chatRoomNo, chatPayload);
        rabbitTemplate.convertAndSend("chat.exchange", "*.room." + chatRoomNo, result);

        return result;
    }

}
