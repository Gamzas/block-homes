package com.blockhomes.tradings.dto.item.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetLikeItemsReq {

    private String userAddress;
    private String localDateTime;

}
