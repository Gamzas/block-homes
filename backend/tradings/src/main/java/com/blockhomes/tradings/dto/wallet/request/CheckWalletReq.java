package com.blockhomes.tradings.dto.wallet.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CheckWalletReq {

    private String name;
    private String phoneNumber;

}
