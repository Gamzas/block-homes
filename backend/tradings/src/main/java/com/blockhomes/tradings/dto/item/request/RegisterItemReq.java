package com.blockhomes.tradings.dto.item.request;

import com.blockhomes.tradings.util.ListRange;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterItemReq {

    @NotBlank
    @Schema(description = "소유주 지갑 DID", example = "did:klay:abcd...")
    private String ownerWalletDID;

    @NotBlank
    @Schema(description = "매물 부동산 DID", example = "did:klay:abcd...")
    private String realEstateDID;

    @NotBlank
    @Schema(description = "도로명주소", example = "서울특별시 광진구 능동로 120")
    private String roadNameAddress;

    @Min(1) @Max(3)
    @Schema(description = "거래 형식", example = "1 : 월세, 2 : 전세, 3 : 매매")
    private Integer transactionType;

    @NotNull
    @Schema(description = "넓이 (제곱미터)", example = "19.2")
    private Double area;

    @NotNull
    @Schema(description = "가격", example = "1000000000")
    private Long price;

    @NotNull
    @Schema(description = "월세", example = "100000 (매매이거나 없으면 0 넣어주세요)")
    private Integer monthlyPrice;

    @NotNull
    @Schema(description = "관리비", example = "100000 (없으면 0)")
    private Integer administrationCost;

    @NotNull
    @Schema(description = "계약 개월 수", example = "12")
    private Integer contractMonths;

    @ListRange(min = 1, max = 5)
    @Schema(description = "관리비 항목", example = "1 : 전기비, 2 : 가스비, 3 : 수도비, 4 : 인터넷, 5 : TV")
    private List<Integer> administrationFeeCategoryList;

    @ListRange(min = 1, max = 12)
    @Schema(description = "옵션 항목", example = "1 : 에어컨, 2 : 냉장고, 3 : 세탁기, 4 : 가스레인지, 5 : 인덕션, 6 : 전자레인지, 7 : 책상, 8 : 책장, 9 : 침대, 10 : 옷장, 11 : 신발장, 12 : 싱크대")
    private List<Integer> additionalOptionCategoryList;

    @NotNull
    @Schema(description = "위도")
    private Double latitude;

    @NotNull
    @Schema(description = "경도")
    private Double longitude;

    @Min(1) @Max(4)
    @Schema(description = "부동산 형식", example = "1 : 아파트, 2 : 빌라, 3 : 원룸, 4 : 오피스텔")
    private Integer realEstateType;

    @NotNull
    @Schema(description = "방 개수", example = "2")
    private Integer roomNumber;

    @NotNull
    @Schema(description = "화장실 개수", example = "1")
    private Integer toiletNumber;

    @Schema(description = "상세설명")
    private String description;

    @Min(1) @Max(3)
    @Schema(description = "분석 레포트 등급", example = "1 : 안전, 2 : 보통, 3 : 위험")
    private Integer reportRank;

    @NotNull
    @Schema(description = "매물의 건물 총 층수", example = "3")
    private Integer buildingFloor;

    @NotNull
    @Schema(description = "매물 층", example = "2")
    private Integer itemFloor;

    @NotBlank
    @Schema(description = "입주가능일", example = "yyyy-MM-dd (반드시 지켜야함 ㅠㅠ)")
    private String moveInDate;

    @NotNull
    @Schema(description = "세대 당 주차대수", example = "1.7")
    private Double parkingRate;

    @NotNull
    @Schema(description = "엘리베이터 보유 여부", example = "true")
    private Boolean haveElevator;

}
