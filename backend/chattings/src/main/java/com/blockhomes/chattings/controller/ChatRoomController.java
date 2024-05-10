package com.blockhomes.chattings.controller;

import com.blockhomes.chattings.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/room")
public class ChatRoomController {

    private final ChatRepository chatRepository;

    @GetMapping("/")
    public ResponseEntity<>

}
