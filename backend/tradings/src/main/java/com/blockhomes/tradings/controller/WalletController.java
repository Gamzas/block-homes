package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.wallet.request.CheckWalletReq;
import com.blockhomes.tradings.dto.wallet.request.GetWalletReq;
import com.blockhomes.tradings.dto.wallet.request.RegisterWalletReq;
import com.blockhomes.tradings.dto.wallet.response.CheckWalletRes;
import com.blockhomes.tradings.dto.wallet.response.GetWalletRes;
import com.blockhomes.tradings.dto.wallet.response.RegisterWalletRes;
import com.blockhomes.tradings.service.WalletService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "Wallet")
@RestController
@RequestMapping("/api/v1/wallet")
@RequiredArgsConstructor
public class WalletController {

    private final WalletService walletService;

    @GetMapping("/check")
    @Operation(
        summary = "지갑 등록 여부 확인",
        description = "해당 신원으로 지갑이 등록되어 있는지 확인합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 등록 (지갑 주소, DID 반환)"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "지갑 주소가 없음 (생성해서 등록 필요)"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<CheckWalletRes> checkWallet(@ModelAttribute @Valid CheckWalletReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.checkWallet(req));
    }

    @GetMapping
    @Operation(
        summary = "지갑 정보 가져오기",
        description = "해당 지갑 주소에 해당하는 지갑 정보를 반환합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "지갑 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<GetWalletRes> getWallet(@ModelAttribute @Valid GetWalletReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.getWallet(req));
    }

    @PostMapping
    @Operation(
        summary = "생성된 지갑 등록하기",
        description = "사용자가 지갑을 자체적으로 생성 후 DB에 지갑 정보를 등록합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<RegisterWalletRes> registerWallet(@RequestBody @Valid RegisterWalletReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.registerWallet(req));
    }

}
