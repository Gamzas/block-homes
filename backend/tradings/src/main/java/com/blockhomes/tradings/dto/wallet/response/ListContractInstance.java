package com.blockhomes.tradings.dto.wallet.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ListContractInstance {

    private Integer contractNo;
    private String contractAddress;
    private LocalDateTime createdAt;

}
