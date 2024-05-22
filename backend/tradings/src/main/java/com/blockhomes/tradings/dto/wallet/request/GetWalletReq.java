package com.blockhomes.tradings.dto.wallet.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetWalletReq {

    @NotBlank
    private String walletAddress;

}
