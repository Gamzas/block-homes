package com.blockhomes.tradings.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "additional_info")
public class AdditionalInfo {

    @Id
    @GeneratedValue
    @Column(name = "addditional_info_no")
    private Integer additionalInfoNo;

    @Column(name = "additional_info_name")
    private String additionalInfoName;

    @Column(name = "created_at", insertable = false)
    private LocalDateTime createdAt;

}
