package com.blockhomes.tradings.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "item_no")
    private Integer itemNo;

    @Column(name = "real_estate_did")
    private String realEstateDID;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "additional_info_no")
    private List<AdditionalInfo> additionalInfos;

    @Column(name = "transaction_type")
    private Integer transactionType;

    @Column(name = "price")
    private Integer price;

    @Column(name = "real_estate_type")
    private Integer realEstateType;

    @Column(name = "room_number")
    private Integer roomNumber;

    @Column(name = "toilet_number")
    private Integer toiletNumber;

    @Column(name = "description")
    private String description;

    @Column(name = "report_rank")
    private Integer reportRank;

    @Column(name = "building_floor")
    private Integer buildingFloor;

    @Column(name = "item_floor")
    private Integer itemFloor;

    @Column(name = "administration_cost")
    private Integer administrationCost;

    @Column(name = "move_in_date")
    private LocalDateTime moveInDate;

    @Column(name = "parking_rate")
    private Double parkingRate;

    @Column(name = "have_elevator")
    private Boolean haveElevator;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

}
