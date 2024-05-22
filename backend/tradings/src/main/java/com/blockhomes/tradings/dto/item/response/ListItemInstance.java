package com.blockhomes.tradings.dto.item.response;

import com.blockhomes.tradings.entity.item.enums.RealEstateType;
import com.blockhomes.tradings.entity.item.enums.ReportRank;
import com.blockhomes.tradings.entity.item.enums.TransactionStatus;
import com.blockhomes.tradings.entity.item.enums.TransactionType;
import com.blockhomes.tradings.util.AreaUtil;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class ListItemInstance {

    private Integer itemNo;
    private String realEstateDID;
    private String roadNameAddress;
    private Integer transactionType;
    private Integer realEstateType;
    private Integer reportRank;
    private Integer transactionStatus;
    private Double area;
    private Double pyeong;
    private Long price;
    private Integer monthlyPrice;
    private Integer administrationCost;
    private Integer contractMonths;
    private Double latitude;
    private Double longitude;
    private String imageUrl;

    @Builder
    public ListItemInstance(
        Integer itemNo,
        String realEstateDID,
        String roadNameAddress,
        TransactionType transactionType,
        RealEstateType realEstateType,
        ReportRank reportRank,
        TransactionStatus transactionStatus,
        Double area,
        Long price,
        Integer monthlyPrice,
        Integer administrationCost,
        Integer contractMonths,
        Double latitude,
        Double longitude,
        String imageUrl
    ) {
        this.itemNo = itemNo;
        this.realEstateDID = realEstateDID;
        this.roadNameAddress = roadNameAddress;
        this.transactionType = TransactionType.enumToValue(transactionType);
        this.realEstateType = RealEstateType.enumToValue(realEstateType);
        this.reportRank = ReportRank.enumToValue(reportRank);
        this.transactionStatus = TransactionStatus.enumToValue(transactionStatus);
        this.area = area;
        this.pyeong = AreaUtil.squareMeterToPyeong(area);
        this.price = price;
        this.monthlyPrice = monthlyPrice;
        this.administrationCost = administrationCost;
        this.contractMonths = contractMonths;
        this.latitude = latitude;
        this.longitude = longitude;
        this.imageUrl = imageUrl;
    }

}
