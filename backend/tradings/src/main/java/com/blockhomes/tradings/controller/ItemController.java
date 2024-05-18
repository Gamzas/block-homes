package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.item.request.*;
import com.blockhomes.tradings.dto.item.response.*;
import com.blockhomes.tradings.service.ItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "Item")
@RestController
@RequestMapping("/api/v1/item")
@RequiredArgsConstructor
@Slf4j
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/list")
    @Operation(
        summary = "지도 기반 부동산 매물 리스트 조회",
        description = "지도 내에 있는 매물 리스트를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "조회 완료"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ListItemRes> listItems(@ModelAttribute @Valid ListItemReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.listItems(req));
    }

    @GetMapping("/owner-list")
    @Operation(
        summary = "내가 등록한 매물 모아보기",
        description = "내가 등록한 매물 리스트를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "조회 완료"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ListItemRes> listOwnerItems(@ModelAttribute @Valid OwnerItemReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.listOwnerItems(req));
    }

    @GetMapping("/detail/{itemNo}")
    @Operation(
        summary = "매물 상세보기",
        description = "매물 번호에 대한 상세 정보를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "조회 완료"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "매물 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<DetailItemRes> getDetailItem(@PathVariable Integer itemNo, @ModelAttribute DetailItemReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.getDetailItem(itemNo, req));
    }

    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
    @Operation(
        summary = "부동산 매물 등록",
        description = "부동산 매물을 등록합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "사용자 DID 오류 (없는 사용자)"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<RegisterItemRes> registerItem(@RequestPart @Valid RegisterItemReq req,
                                                        @RequestPart MultipartFile mainImage,
                                                        @RequestPart(required = false) MultipartFile[] roomImages,
                                                        @RequestPart(required = false) MultipartFile[] kitchenToiletImages) {
        log.info("{} {}", Arrays.toString(roomImages), Arrays.toString(kitchenToiletImages));
        return ResponseEntity
            .status(CREATED)
            .body(itemService.registerItem(req, mainImage, roomImages, kitchenToiletImages));
    }

    @PatchMapping(value = "/{itemNo}", consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
    @Operation(
        summary = "부동산 매물 수정",
        description = "부동산 매물 정보를 수정합니다. (수정되지 않은 것들은 원래 값 넣어주세요 !!!!!! 아무것도 안 넣으면 다 지워짐)",
        responses = {
            @ApiResponse(responseCode = "202", description = "정상 수정 완료"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "사용자 / 매물 존재하지 않음"),
            @ApiResponse(responseCode = "409", description = "매물 소유주와 요청한 사용자가 일치하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<DetailItemRes> modifyItem(@RequestPart @Valid ModifyItemReq req,
                                                    @RequestPart(required = false) MultipartFile mainImage,
                                                    @RequestPart(required = false) MultipartFile[] roomImages,
                                                    @RequestPart(required = false) MultipartFile[] kitchenToiletImages) {
        return ResponseEntity
            .status(HttpStatus.ACCEPTED)
            .body(itemService.modifyItem(req, mainImage, roomImages, kitchenToiletImages));
    }

    @PostMapping("status/{itemNo}")
    @Operation(
        summary = "매물 거래 단계 수정",
        description = "매물 거래 단계를 수정합니다. (1 : 거래준비 (판매중), 2 : 거래 중, 3 : 거래완료)",
        responses = {
            @ApiResponse(responseCode = "202", description = "정상 수정 완료"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "사용자 / 매물 존재하지 않음"),
            @ApiResponse(responseCode = "409", description = "매물 소유주와 요청한 사용자가 일치하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<BaseResponseBody> processTransaction(@PathVariable Integer itemNo, @RequestBody @NotNull Integer process) {
        return ResponseEntity
            .status(OK)
            .body(itemService.processTransaction(itemNo, process));
    }

    @DeleteMapping()
    @Operation(
        summary = "부동산 매물 삭제",
        description = "부동산 매물을 삭제합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "사용자 / 매물 존재하지 않음"),
            @ApiResponse(responseCode = "409", description = "매물 소유주와 요청한 사용자가 일치하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<BaseResponseBody> deleteItem(@ModelAttribute @Valid DeleteItemReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.deleteItem(req));
    }

    @PostMapping("/likes")
    @Operation(
        summary = "매물 찜하기",
        description = "사용자가 마음에 드는 매물을 찜합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "없는 사용자 / 아이템"),
            @ApiResponse(responseCode = "409", description = "이미 등록된 찜"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<LikeItemRes> likeItem(@RequestBody @Valid LikeItemReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.likeItem(req));
    }

    @GetMapping("/likes")
    @Operation(
        summary = "찜한 매물 목록 가져오기",
        description = "사용자가 찜한 매물들의 목록을 반환합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "없는 사용자"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<GetLikeItemsRes> getLikeItems(@ModelAttribute @Valid GetLikeItemsReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.getLikeItems(req));
    }

    @DeleteMapping("/likes")
    @Operation(
        summary = "찜 삭제하기",
        description = "사용자가 찜해놓은 매물을 찜 취소합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "없는 사용자 / 매물"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<BaseResponseBody> deleteLikes(@ModelAttribute @Valid DeleteLikesReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.deleteLikes(req));
    }

}
