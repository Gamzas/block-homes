package com.blockhomes.tradings.dto.wallet.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetWalletReq {

    private String walletAddress;

}