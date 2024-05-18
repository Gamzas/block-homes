package com.blockhomes.tradings.dto.chat.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContractRes {

    private Integer contractNo;
    private String contractAddress;
    private String buyerWalletAddress;
    private String sellerWalletAddress;
    private LocalDateTime createdAt;

}
