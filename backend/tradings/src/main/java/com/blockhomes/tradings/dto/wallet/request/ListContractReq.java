package com.blockhomes.tradings.dto.wallet.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ListContractReq {

    @NotNull
    @Min(1) @Max(2)
    @Schema(description = "사용자 모드 (구매자 / 판매자)", example = "1 : 판매자, 2 : 구매자")
    private Integer mode;

    @NotBlank
    @Schema(description = "사용자 지갑 주소")
    private String walletAddress;

}
