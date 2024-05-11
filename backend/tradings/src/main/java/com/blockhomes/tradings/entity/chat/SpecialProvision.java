package com.blockhomes.tradings.entity.chat;

import com.blockhomes.tradings.entity.common.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "special_provision")
public class SpecialProvision extends BaseEntity {

    @Id
    @Column(name = "special_provision_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer specialProvisionNo;

    @NotNull
    @Column(name = "content", nullable = false)
    private String content;

}
