package com.blockhomes.tradings.dto.item.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterItemRes {

    private Integer itemNo;
    private String ownerWalletAddress;
    private String realEstateDID;
    private String roadNameAddress;
    private LocalDateTime createdAt;

}
