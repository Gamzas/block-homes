package com.blockhomes.tradings.dto.item.request;

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
public class ListItemReq {

    @NotNull
    @Schema(description = "지도 북동쪽 위도")
    private Double northEastLatitude;

    @NotNull
    @Schema(description = "지도 북동쪽 경도")
    private Double northEastLongitude;

    @NotNull
    @Schema(description = "지도 남서쪽 위도")
    private Double southWestLatitude;

    @NotNull
    @Schema(description = "지도 남서쪽 경도")
    private Double southWestLongitude;

    @Min(0) @Max(4)
    @Schema(description = "부동산 유형", example = "0 : 필터 없음, 1 : 아파트, 2 : 빌라, 3 : 원룸, 4 : 오피스텔")
    private Integer realEstateType;

    @Min(0) @Max(3)
    @Schema(description = "분석 레포트 등급", example = "0 : 필터 없음, 1 : 안전, 2 : 보통, 3 : 위험")
    private Integer reportRank;

    @Min(0) @Max(3)
    @Schema(description = "거래 형식", example = "0 : 필터 없음, 1 : 월세, 2 : 전세, 3 : 매매")
    private Integer transactionType;

    @NotNull
    @Schema(description = "최소가격 (0 : 필터 적용 X)")
    private Long minPrice;

    @NotNull
    @Schema(description = "최대가격 (0 : 필터 적용 X)")
    private Long maxPrice;

    @NotNull
    @Schema(description = "최소 평 수 (0 : 필터 적용 X)")
    private Integer minPyeong;

    @NotNull
    @Schema(description = "최대 평 수 (0 : 필터 적용 X)")
    private Integer maxPyeong;

}
