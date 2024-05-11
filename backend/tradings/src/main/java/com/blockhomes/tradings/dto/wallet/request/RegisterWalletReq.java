package com.blockhomes.tradings.dto.wallet.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterWalletReq {

    private String walletAddress;
    private String encPrivateKey;
    private String name;

}
