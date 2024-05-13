package com.blockhomes.tradings.dto.item.request;

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
public class ModifyItemReq {

    @NotNull
    @Schema(description = "매물 고유번호 (PK)")
    private Integer itemNo;

    @NotNull
    @Schema(description = "가격", example = "1000000000")
    private Long price;

    @NotNull
    @Schema(description = "월세", example = "100000 (매매이거나 없으면 0 넣어주세요)")
    private Integer monthlyPrice;

    @NotNull
    @Schema(description = "관리비", example = "100000 (없으면 0)")
    private Integer administrationCost;

    @Min(1) @Max(5)
    @Schema(description = "관리비 항목", example = "1 : 전기비, 2 : 가스비, 3 : 수도비, 4 : 인터넷, 5 : TV")
    private List<Integer> administrationFeeCategoryList;

    @Min(1) @Max(12)
    @Schema(description = "옵션 항목", example = "1 : 에어컨, 2 : 냉장고, 3 : 세탁기, 4 : 가스레인지, 5 : 인덕션, 6 : 전자레인지, 7 : 책상, 8 : 책장, 9 : 침대, 10 : 옷장, 11 : 신발장, 12 : 싱크대")
    private List<Integer> additionalOptionCategoryList;

    @NotNull
    @Schema(description = "방 개수", example = "2")
    private Integer roomNumber;

    @NotNull
    @Schema(description = "화장실 개수", example = "1")
    private Integer toiletNumber;

    @Schema(description = "상세설명")
    private String description;

    @NotBlank
    @Schema(description = "입주가능일", example = "yyyy.MM.dd (반드시 지켜야함 ㅠㅠ)")
    private String moveInDate;

}
