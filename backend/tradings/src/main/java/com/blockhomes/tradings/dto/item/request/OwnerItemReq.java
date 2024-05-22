package com.blockhomes.tradings.dto.item.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OwnerItemReq {

    @NotBlank
    private String ownerWallet;

}
