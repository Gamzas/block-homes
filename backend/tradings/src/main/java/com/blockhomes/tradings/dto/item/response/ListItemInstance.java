package com.blockhomes.tradings.dto.item.response;

import com.blockhomes.tradings.entity.item.RealEstateType;
import com.blockhomes.tradings.entity.item.ReportRank;
import com.blockhomes.tradings.entity.item.TransactionType;
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
    private Double area;
    private Double pyeong;
    private Long price;
    private Integer monthlyPrice;
    private Integer administrationCost;
    private Double latitude;
    private Double longitude;

    @Builder
    public ListItemInstance(
        Integer itemNo,
        String realEstateDID,
        String roadNameAddress,
        TransactionType transactionType,
        RealEstateType realEstateType,
        ReportRank reportRank,
        Double area,
        Long price,
        Integer monthlyPrice,
        Integer administrationCost,
        Double latitude,
        Double longitude
    ) {
        this.itemNo = itemNo;
        this.realEstateDID = realEstateDID;
        this.roadNameAddress = roadNameAddress;
        this.transactionType = TransactionType.enumToValue(transactionType);
        this.realEstateType = RealEstateType.enumToValue(realEstateType);
        this.reportRank = ReportRank.enumToValue(reportRank);
        this.area = area;
        this.pyeong = AreaUtil.squareMeterToPyeong(area);
        this.price = price;
        this.monthlyPrice = monthlyPrice;
        this.administrationCost = administrationCost;
        this.latitude = latitude;
        this.longitude = longitude;
    }

}
