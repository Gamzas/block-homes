package com.blockhomes.tradings.dto.item.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterItemRes {

    private Integer itemNo;
    private String ownerWalletAddress;
    private String realEstateDID;
    private LocalDateTime createdAt;

}
