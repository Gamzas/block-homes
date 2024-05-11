package com.blockhomes.tradings.entity.item;

import com.blockhomes.tradings.entity.common.BaseEntity;
import com.blockhomes.tradings.entity.wallet.Wallet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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
    private Wallet wallet;

    @NotNull
    @Column(name = "real_estate_did", nullable = false)
    private String realEstateDID;

    @NotNull
    @Column(name = "transaction_type", nullable = false)
    private Integer transactionType;

    @NotNull
    @Column(name = "area", nullable = false)
    private Double area;

    @NotNull
    @Column(name = "price", nullable = false)
    private Integer price;

    @NotNull
    @Column(name = "real_estate_type", nullable = false)
    private Integer realEstateType;

    @NotNull
    @Column(name = "room_number", nullable = false)
    private Integer roomNumber;

    @NotNull
    @Column(name = "toilet_number", nullable = false)
    private Integer toiletNumber;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "report_rank", nullable = false)
    private Integer reportRank;

    @NotNull
    @Column(name = "building_floor", nullable = false)
    private Integer buildingFloor;

    @NotNull
    @Column(name = "item_floor", nullable = false)
    private Integer itemFloor;

    @NotNull
    @Column(name = "administration_cost", nullable = false)
    private Integer administrationCost;

    @NotNull
    @Column(name = "move_in_date", nullable = false)
    private LocalDateTime moveInDate;

    @NotNull
    @Column(name = "parking_rate", nullable = false)
    private Double parkingRate;

    @NotNull
    @Column(name = "have_elevator", nullable = false)
    private Boolean haveElevator;

}
