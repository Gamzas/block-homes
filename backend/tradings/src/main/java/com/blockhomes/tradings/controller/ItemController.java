package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.item.request.ListItemReq;
import com.blockhomes.tradings.dto.item.request.RegisterItemReq;
import com.blockhomes.tradings.dto.item.response.DetailItemRes;
import com.blockhomes.tradings.dto.item.response.ListItemRes;
import com.blockhomes.tradings.dto.item.response.RegisterItemRes;
import com.blockhomes.tradings.service.ItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ListItemRes> listItems(@ModelAttribute @Valid ListItemReq req) {
        return ResponseEntity
            .status(OK)
            .body(itemService.listItems(req));
    }

    @GetMapping("/detail/{itemNo}")
    @Operation(
        summary = "매물 상세보기",
        description = "매물 번호에 대한 상세 정보를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "201", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "매물 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<DetailItemRes> getDetailItem(@PathVariable Integer itemNo) {
        return ResponseEntity
            .status(OK)
            .body(itemService.getDetailItem(itemNo));
    }

    @PostMapping("/register")
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
        return ResponseEntity
            .status(CREATED)
            .body(itemService.registerItem(req, mainImage, roomImages, kitchenToiletImages));
    }

//    @PostMapping("/like")
//    public ResponseEntity<LikeItemRes> likeItem(@RequestBody @Valid LikeItemReq req) {
//        return ResponseEntity
//            .status(OK)
//            .body(itemService.likeItem(req));
//    }

}
