package com.blockhomes.tradings.dto.wallet.response;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CheckWalletRes {

    private String walletAddress;
    private String userDID;

}
