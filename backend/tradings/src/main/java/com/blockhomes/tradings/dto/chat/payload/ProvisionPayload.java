package com.blockhomes.tradings.dto.chat.payload;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProvisionPayload {

    @NotNull
    private List<Integer> provisionList;

    @NotBlank
    private String senderWalletAddress;

    @NotNull
    private Integer senderRole;

}
