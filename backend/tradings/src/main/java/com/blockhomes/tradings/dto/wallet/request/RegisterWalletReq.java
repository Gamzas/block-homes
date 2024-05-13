package com.blockhomes.tradings.dto.wallet.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterWalletReq {

    @NotBlank
    private String walletAddress;

    @NotBlank
    private String encPrivateKey;

    @NotBlank
    private String name;

    @NotBlank
    private String phoneNumber;

}
