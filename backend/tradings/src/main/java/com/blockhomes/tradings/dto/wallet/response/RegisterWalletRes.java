package com.blockhomes.tradings.dto.wallet.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterWalletRes {

    private String walletAddress;
    private String encPrivateKey;
    private String name;
    private String phoneNumber;
    private LocalDateTime createdAt;

}
