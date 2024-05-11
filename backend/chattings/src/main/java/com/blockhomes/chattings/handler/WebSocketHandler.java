package com.blockhomes.chattings.handler;

import com.blockhomes.chattings.dto.ChatDto;
import com.blockhomes.chattings.dto.ChatRoom;
import com.blockhomes.chattings.service.ChatService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Slf4j
@RequiredArgsConstructor
@Component
public class WebSocketHandler extends TextWebSocketHandler {

    private final ObjectMapper objectMapper;
    private final ChatService chatService;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        log.info("Payload : {}", payload);

        ChatDto chatDto = objectMapper.readValue(payload, ChatDto.class);
        ChatRoom chatRoom = chatService.findRoomById(chatDto.getRoomId());

        chatRoom.handleActions(session, chatDto, chatService);

    }
}