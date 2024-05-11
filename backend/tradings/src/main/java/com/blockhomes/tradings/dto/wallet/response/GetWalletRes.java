package com.blockhomes.tradings.dto.wallet.response;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetWalletRes {

    private String walletAddress;
    private String userDID;
    private String encPrivateKey;
    private String name;

}
