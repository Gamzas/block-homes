package com.blockhomes.tradings.dto.item.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterItemReq {

    @Schema(description = "소유주 지갑 DID", example = "did:klay:abcd...")
    private String ownerWalletDID;

    @Schema(description = "매물 부동산 DID", example = "did:klay:abcd...")
    private String realEstateDID;

    @Min(1) @Max(3)
    @Schema(description = "거래 형식", example = "1 : 월세, 2 : 전세, 3 : 매매")
    private Integer transactionType;

    @Schema(description = "넓이 (제곱미터)", example = "19.2")
    private Double area;

    @Schema(description = "가격", example = "1000000000")
    private Long price;

    @Schema(description = "월세", example = "100000 (매매이거나 없으면 0 넣어주세요)")
    private Integer monthlyPrice;

    @Schema(description = "관리비", example = "100000 (없으면 0)")
    private Integer administrationCost;

    @Schema(description = "위도")
    private Double latitude;

    @Schema(description = "경도")
    private Double longitude;

    @Min(1) @Max(4)
    @Schema(description = "부동산 형식", example = "1 : 아파트, 2 : 빌라, 3 : 원룸, 4 : 오피스텔")
    private Integer realEstateType;

    @Schema(description = "방 개수", example = "2")
    private Integer roomNumber;

    @Schema(description = "화장실 개수", example = "1")
    private Integer toiletNumber;

    @Schema(description = "상세설명")
    private String description;

    @Min(1) @Max(3)
    @Schema(description = "분석 레포트 등급", example = "1 : 안전, 2 : 보통, 3 : 위험")
    private Integer reportRank;

    @Schema(description = "매물의 건물 총 층수", example = "3")
    private Integer buildingFloor;

    @Schema(description = "매물 층", example = "2")
    private Integer itemFloor;

    @Schema(description = "입주가능일", example = "yyyy.MM.dd (반드시 지켜야함 ㅠㅠ)")
    private String moveInDate;

    @Schema(description = "세대 당 주차대수", example = "1.7")
    private Double parkingRate;

    @Schema(description = "엘리베이터 보유 여부", example = "true")
    private Boolean haveElevator;

}
