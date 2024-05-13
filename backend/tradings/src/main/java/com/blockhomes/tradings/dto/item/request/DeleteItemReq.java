package com.blockhomes.tradings.dto.item.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeleteItemReq {

    private Integer itemNo;
    private String walletAddress;

}
