package com.blockhomes.tradings.dto.chat.response;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WalletsRes {

    private String sellerWalletAddress;
    private String buyerWalletAddress;

}
