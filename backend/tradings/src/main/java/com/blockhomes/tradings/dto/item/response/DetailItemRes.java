package com.blockhomes.tradings.dto.item.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DetailItemRes {

    private Integer itemNo;
    private String ownerDID;
    private String realEstateDID;
    private String roadNameAddress;
    private Integer realEstateType;
    private Integer reportRank;
    private Integer transactionStatus;
    private Double area;
    private Integer pyeong;
    private Long price;
    private Integer monthlyPrice;
    private Integer administrationCost;
    private Integer contractMonths;
    private Double latitude;
    private Double longitude;
    private Integer roomNumber;
    private Integer toiletNumber;
    private String description;
    private Integer buildingFloor;
    private Integer itemFloor;
    private LocalDateTime moveInDate;
    private Double parkingRate;
    private Boolean haveElevator;
    private LocalDateTime createdAt;

    private List<ItemImageInstance> itemImageList;
    private List<Integer> itemAdministrationFeeList;
    private List<Integer> itemAdditionalOptionList;

}
