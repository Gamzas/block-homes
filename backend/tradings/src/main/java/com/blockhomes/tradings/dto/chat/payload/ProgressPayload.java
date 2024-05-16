package com.blockhomes.tradings.dto.chat.payload;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProgressPayload {

    @NotBlank
    private String senderWalletAddress;

    @NotNull
    private Integer senderRole;

}
