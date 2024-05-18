package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.chat.request.*;
import com.blockhomes.tradings.dto.chat.response.*;
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
    @Operation(
        summary = "채팅방 존재 여부 확인",
        description = "매물 번호와 구매자 지갑 주소에 해당하는 채팅방이 있는지 확인합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "채팅방 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<Integer> checkChatRoom(@ModelAttribute @Valid CheckChatRoomReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.checkChatRoom(req));
    }

    @PostMapping()
    @Operation(
        summary = "거래진행방 생성",
        description = "거래를 진행하기 위한 진행방을 생성합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "지갑 / 매물 번호 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<CreateChatRoomRes> createChatRoom(@RequestBody @Valid CreateChatRoomReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.createChatRoom(req));
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

    @PostMapping("/provision")
    @Operation(
        summary = "특약사항 작성",
        description = "특약사항을 작성합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<RegisterProvisionRes> registerProvision(@RequestBody @Valid RegisterProvisionReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.registerProvision(req));
    }

    @GetMapping("/provision")
    @Operation(
        summary = "특약사항 조회",
        description = "특약사항을 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<GetProvisionRes> getSpecialProvision(@ModelAttribute @Valid GetProvisionReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getSpecialProvision(req));
    }

    @DeleteMapping("/provision")
    @Operation(
        summary = "특약사항 삭제",
        description = "해당 거래 진행방 번호에 해당하는 특약사항들을 삭제합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<BaseResponseBody> deleteSpecialProvision(@ModelAttribute Integer chatRoomNo) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.deleteSpecialProvision(chatRoomNo));
    }

    @PatchMapping("/contract")
    @Operation(
        summary = "계약서 주소 임시 등록 / 수정",
        description = "계약서의 주소를 임시 등록 / 수정합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<TempContractRes> registerTemporaryContract(@RequestBody @Valid RegisterContractReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.registerTemporaryContract(req));
    }

    @GetMapping("/contract")
    @Operation(
        summary = "임시 계약서 주소 조회",
        description = "계약서의 주소를 임시 등록합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<TempContractRes> getTemporaryContract(@ModelAttribute @Valid GetContractReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getTemporaryContract(req));
    }

    @PostMapping("/contract")
    @Operation(
        summary = "계약서 주소 최종 등록",
        description = "계약서의 주소를 최종 등록합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ContractRes> registerFinalContract(@RequestBody @Valid RegisterContractReq req) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.registerFinalContract(req));
    }

    @GetMapping("wallets")
    @Operation(
        summary = "구매자와 판매자의 지갑 주소 조회",
        description = "계약서 서명을 위한 구매자와 판매자의 지갑 주소를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "거래 진행방이 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<WalletsRes> getWallets(@ModelAttribute Integer chatRoomNo) {
        return ResponseEntity
            .status(OK)
            .body(chatRoomService.getWallets(chatRoomNo));
    }

}
