package com.blockhomes.tradings.entity.item;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "item")
public class Item extends BaseEntity {

    @Id
    @Column(name = "item_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemNo;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_wallet_no", nullable = false)
    private Wallet ownerWallet;

    @NotNull
    @Column(name = "real_estate_did", unique = true, nullable = false)
    private String realEstateDID;

    @NotNull
    @Column(name = "road_name_address", nullable = false)
    private String roadNameAddress;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "transaction_type", nullable = false)
    private TransactionType transactionType;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "real_estate_type", nullable = false)
    private RealEstateType realEstateType;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "report_rank", nullable = false)
    private ReportRank reportRank;

    @NotNull
    @Column(name = "area", nullable = false)
    private Double area;

    @NotNull
    @Column(name = "price", nullable = false)
    private Long price;

    @NotNull
    @Column(name = "monthly_price", nullable = false)
    private Integer monthlyPrice;

    @NotNull
    @Column(name = "administration_cost", nullable = false)
    private Integer administrationCost;

    @NotNull
    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @NotNull
    @Column(name = "longitude", nullable = false)
    private Double longitude;

    @NotNull
    @Column(name = "room_number", nullable = false)
    private Integer roomNumber;

    @NotNull
    @Column(name = "toilet_number", nullable = false)
    private Integer toiletNumber;

    @Column(name = "description", length = 500)
    @Size(max = 500)
    private String description;

    @NotNull
    @Column(name = "building_floor", nullable = false)
    private Integer buildingFloor;

    @NotNull
    @Column(name = "item_floor", nullable = false)
    private Integer itemFloor;

    @NotNull
    @Column(name = "move_in_date", nullable = false)
    private LocalDateTime moveInDate;

    @NotNull
    @Column(name = "parking_rate", nullable = false)
    private Double parkingRate;

    @NotNull
    @Column(name = "have_elevator", nullable = false)
    private Boolean haveElevator;

    @Builder
    public Item(
        Wallet ownerWallet,
        String realEstateDID,
        String roadNameAddress,
        TransactionType transactionType,
        Double area,
        Long price,
        Integer monthlyPrice,
        Integer administrationCost,
        Double latitude,
        Double longitude,
        RealEstateType realEstateType,
        Integer roomNumber,
        Integer toiletNumber,
        String description,
        ReportRank reportRank,
        Integer buildingFloor,
        Integer itemFloor,
        LocalDateTime moveInDate,
        Double parkingRate,
        Boolean haveElevator
    ) {
        this.ownerWallet = ownerWallet;
        this.realEstateDID = realEstateDID;
        this.roadNameAddress = roadNameAddress;
        this.transactionType = transactionType;
        this.area = area;
        this.price = price;
        this.monthlyPrice = monthlyPrice;
        this.administrationCost = administrationCost;
        this.latitude = latitude;
        this.longitude = longitude;
        this.realEstateType = realEstateType;
        this.roomNumber = roomNumber;
        this.toiletNumber = toiletNumber;
        this.description = description;
        this.reportRank = reportRank;
        this.buildingFloor = buildingFloor;
        this.itemFloor = itemFloor;
        this.moveInDate =moveInDate;
        this.parkingRate = parkingRate;
        this.haveElevator = haveElevator;
    }

}
