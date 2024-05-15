package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.chat.request.CreateChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.CheckChatRoomReq;
import com.blockhomes.tradings.dto.chat.request.ListChatRoomsReq;
import com.blockhomes.tradings.dto.chat.response.CreateChatRoomRes;
import com.blockhomes.tradings.dto.chat.response.DetailChatRoomRes;
import com.blockhomes.tradings.dto.chat.response.ListChatRoomsRes;
import com.blockhomes.tradings.service.ChatRoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "Chat")
@RestController
@RequestMapping("api/v1/chatrooms")
@RequiredArgsConstructor
@Slf4j
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    @GetMapping()
    @Operation(
        summary = "채팅방 리스트 조회",
        description = "지갑 주소에 해당하는 판매자 혹은 구매자 채팅 목록을 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ListChatRoomsRes> listChatRooms(@ModelAttribute @Valid ListChatRoomsReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.listChatRooms(req));
    }

    @GetMapping("/check")
    public ResponseEntity<Integer> checkChatRoom(@ModelAttribute @Valid CheckChatRoomReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.checkChatRoom(req));
    }

    @GetMapping("/detail/{chatRoomNo}")
    @Operation(
        summary = "채팅방 정보 조회",
        description = "매물 번호와 구매자에 해당하는 채팅 방 정보를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "채팅방 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<DetailChatRoomRes> detailChatRoom(@PathVariable Integer chatRoomNo) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.detailChatRoom(chatRoomNo));
    }

    @PostMapping()
    public ResponseEntity<CreateChatRoomRes> createChatRoom(@RequestBody @Valid CreateChatRoomReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.createChatRoom(req));
    }

}
